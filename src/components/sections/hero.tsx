import React from "react"

import { Button } from "@/components/ui/button"

interface HeroProps {
  title?: string
  subtitle?: string
}

const Hero: React.FC<HeroProps> = ({
  title = "Transform Your Instagram Engagement with Slide",
  subtitle = "Slide revolutionizes how you connect with your audience on Instagram. Automate responses and engage effortlessly, turning every interaction into a valuable opportunity.",
}) => {
  return (
    <div className="relative min-h-[600px] w-full bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative mx-auto flex min-h-[600px] max-w-4xl flex-col items-center justify-center px-4 text-center">
        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mb-8 max-w-2xl text-lg text-gray-300">{subtitle}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button variant="default" size="lg">
            Learn More
          </Button>
          <Button variant="outline" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
