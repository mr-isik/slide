import React from 'react'
import { BlueAddIcon } from '@/icons'

import PopOver from '@/components/global/popover'

type Props = {
  label: string
  children: React.ReactNode
}

const TriggerButton = ({ children, label }: Props) => {
  return (
    <PopOver
      className="w-[400px]"
      trigger={
        <div className="border-2 border-dashed w-full border-[#3352cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-4">
          <BlueAddIcon />
          <p className="text-[#768bdd] font-bold">{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  )
}

export default TriggerButton
