'use client'

import React from 'react'
import ActivateAutomationButton from '@/features/automation/components/activate-automation-button'
import { ChevronRight, PencilIcon } from 'lucide-react'

import { useEditAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { useQueryAutomation } from '@/hooks/use-queries'
import { Input } from '@/components/ui/input'

type Props = {
  id: string
}

const AutomationsBreadCrumb = ({ id }: Props) => {
  // WIP: fetch some automation data
  const { data } = useQueryAutomation(id)
  const { disableEdit, edit, enableEdit, inputRef, isPending } =
    useEditAutomation(id)

  const { latestVariable } = useMutationDataState(['update-automation'])

  // WIP: Use mutation stuff to update the automations

  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9b9ca0] truncate">Automations</p>
        <ChevronRight className="text-[#9b9ca0]" />
        <span className="gap-x-3 flex items-center">
          {/* WIP: Show the editing data */}
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable.variables.name : 'Add a new name'
              }
              className="bg-transparent h-auto outline-none text-base border-none p-0"
            />
          ) : (
            <p className="text-[#9b9ca0] truncate">
              {latestVariable?.variables
                ? latestVariable.variables.name
                : /* @ts-expect-error: Name can be null */
                  data?.data?.name}
            </p>
          )}
          {edit ? (
            <></>
          ) : (
            <span
              className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
              onClick={enableEdit}
            >
              <PencilIcon size={14} />
            </span>
          )}
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All states are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>

      <ActivateAutomationButton />
    </div>
  )
}

export default AutomationsBreadCrumb
