import React from "react"
import { ActiveAutomation } from "@/icons/active-automation"

import { Button } from "@/components/ui/button"
import Loader from "@/components/global/loader"

type Props = {
  id: string
}

const ActivateAutomationButton = ({ id }: Props) => {
  // WIP: Set up optimistic UI
  // WIP: Fetch some automation data

  return (
    <Button
      // disabled={isPending}
      // onClick={() => mutate({ state: !data?.data?.active })}
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
      <Loader state={false}>
        <ActiveAutomation />
        <p className="lg:inline hidden">Activate</p>
      </Loader>
    </Button>
  )
}

export default ActivateAutomationButton
