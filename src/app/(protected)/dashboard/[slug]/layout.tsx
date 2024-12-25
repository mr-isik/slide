import React from "react"
import {
  PrefetchUserAutomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

import InfoBar from "@/components/global/infobar/index"
import Sidebar from "@/components/global/sidebar"

type Props = {
  children: React.ReactNode
  params: {
    slug: string
  }
}

const DashboardLayout = async ({ children, params }: Props) => {
  const query = new QueryClient()

  await PrefetchUserProfile(query)
  await PrefetchUserAutomations(query)

  const dehydratedState = dehydrate(query)

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="p-3">
        {/* Sidebar */}
        <Sidebar slug={params.slug} />

        {/* Navbar */}
        <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
          <InfoBar slug={params.slug} />
          {children}
        </div>
      </main>
    </HydrationBoundary>
  )
}

export default DashboardLayout
