"use client"

import React from "react"
import { Trigger } from "@prisma/client"

import { useQueryAutomation } from "@/hooks/use-queries"

type Props = {
  id: string
}

const ThenNode = ({ id }: Props) => {
  const { data }: { data: any } = useQueryAutomation(id)
  const commentTrigger = data?.data?.trigger.find(
    (t: Trigger) => t.type === "COMMENT"
  )

  return !data?.data?.listener ? (
    <></>
  ) : (
    <div className="w-full lg:w-10/12 relative xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
      <div className="absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50"></div>
    </div>
  )
}

export default ThenNode
