import React from "react"

import Loader from "@/components/global/loader"

const Loading = () => {
  return (
    <aside className="h-screen flex items-center justify-center">
      <Loader state>Loading...</Loader>
    </aside>
  )
}

export default Loading
