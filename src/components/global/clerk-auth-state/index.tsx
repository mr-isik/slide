import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs"
import React from "react"
import Loader from "../loader"
import { Button } from "@/components/ui/button"
import { UserIcon } from "lucide-react"

const ClerkAuthState = () => {
  return (
    <>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
          <Button className="rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70">
            <UserIcon />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink
            label="Dashboard"
            url="/dashboard"
            labelIcon={<UserIcon size={16} />}
          />
        </UserButton>
      </SignedIn>
    </>
  )
}

export default ClerkAuthState
