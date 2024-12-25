import React from "react"
import { getAutomationInfo } from "@/actions/automations"
import ThenNode from "@/features/automation/components/then/node"
import Trigger from "@/features/automation/components/trigger"
import { Warning } from "@/icons"
import { PrefetchUserAutomation } from "@/react-query/prefetch"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

import AutomationsBreadCrumb from "@/components/bread-crumbs/automations-bread-crumb"

export async function generateMetadata({
  params,
}: {
  params: {
    id: string
  }
}) {
  const info: any = await getAutomationInfo(params.id)

  return {
    title: `Automation: ${info.data?.name}`,
  }
}

type Props = {
  params: {
    id: string
  }
}

const Page = async ({ params }: Props) => {
  const query = new QueryClient()
  await PrefetchUserAutomation(query, params.id)

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-20">
        <AutomationsBreadCrumb id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <Warning />
            When...
          </div>
          <Trigger id={params.id} />
          <ThenNode id={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  )
}

export default Page
