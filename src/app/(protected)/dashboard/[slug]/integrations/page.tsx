import React from 'react'
import { INTEGRATION_CARDS } from '@/constants/integrations'
import IntegrationCard from '@/features/integration/components/integration-card'

const Integrations = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {INTEGRATION_CARDS.map((card, key) => (
          <IntegrationCard key={key} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Integrations
