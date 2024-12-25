import React from 'react'

import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

type Props = {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

const PopOver = ({ children, trigger, className }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="end"
        side="bottom"
        className={cn('bg-[#1d1d1d] shadow-lg', className)}
      >
        {children}
      </PopoverContent>
    </Popover>
  )
}

export default PopOver
