"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { createUser, findUser } from "./queries"
import { refreshToken } from "@/lib/fetch"
import { updateIntegration } from "../integrations/queries"

export const onCurrentUser = async () => {
  const user = await currentUser()
  if (!user) return redirect("/sign-up")
  return user
}

export const onBoardUser = async () => {
  const user = await onCurrentUser()
  try {
    const found = await findUser(user.id)
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date()
        const expiresAt = found.integrations[0].expiresAt?.getTime()
        const time_left = expiresAt ? expiresAt - today.getTime() : 0
        const days = Math.round(time_left / (1000 * 60 * 60 * 24))
        if (days < 5) {
          console.log("Your integration is about to expire")

          const refresh = await refreshToken(found.integrations[0].token)

          const today = new Date()
          const expire_date = today.setDate(today.getDate() + 60)
          const update_token = await updateIntegration(
            found.integrations[0].id,
            refresh.access_token,
            new Date(expire_date)
          )

          if (!update_token) {
            console.error("Failed to update token")
          }
        }
      }

      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      }
    }

    const created = await createUser(
      user.id,
      user.emailAddresses[0].emailAddress,
      user.firstName!,
      user.lastName!
    )
    return {
      status: 201,
      data: {
        created,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      status: 500,
    }
  }
}

export const onUserInfo = async () => {
  const user = await onCurrentUser()
  try {
    const found = await findUser(user.id)
    if (found) return { status: 200, data: found }
    return { status: 404 }
  } catch (error) {
    console.error(error)
    return { status: 500 }
  }
}
