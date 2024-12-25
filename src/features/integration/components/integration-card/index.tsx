import React from 'react'

import { Button } from '@/components/ui/button'

type Props = {
  title: string
  description: string
  icon: React.ReactNode
  strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({ description, icon, strategy, title }: Props) => {
  // WIP: wire up fetching data and get the integrations from the database

  return (
    <div className="border-2 border-[#3352cc] rounded-2xl gap-x-5 p-5 flex items-center justify-between">
      {icon}
      <div className="flex flex-col flex-1">
        <h1 className="text-xl">{title}</h1>
        <p className="text-[#9D9D9D] text-base ">{description}</p>
      </div>
      <Button
        // onClick={onInstaOAuth}
        //disabled={integrated?.name === strategy}
        className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100"
      >
        {/* {integrated ? 'Connected' : 'Connect'} */}
        Connect
      </Button>
    </div>
  )
}

export default IntegrationCard
