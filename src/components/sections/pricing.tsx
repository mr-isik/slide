import React from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: PricingFeature[]
  buttonText: string
  highlighted?: boolean
}

interface PricingSectionProps {
  yearly?: boolean
}

const pricingData: PricingTier[] = [
  {
    name: "Starter",
    description:
      "Perfect for individuals and small businesses getting started.",
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      { text: "Up to 1,000 followers", included: true },
      { text: "Basic automation", included: true },
      { text: "24/7 support", included: true },
      { text: "Analytics dashboard", included: false },
      { text: "Custom responses", included: false },
      { text: "API access", included: false },
    ],
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and influencers.",
    price: {
      monthly: 79,
      yearly: 790,
    },
    features: [
      { text: "Up to 10,000 followers", included: true },
      { text: "Advanced automation", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Custom responses", included: true },
      { text: "API access", included: false },
    ],
    buttonText: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring custom solutions.",
    price: {
      monthly: 199,
      yearly: 1990,
    },
    features: [
      { text: "Unlimited followers", included: true },
      { text: "Custom automation", included: true },
      { text: "24/7 VIP support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom responses & AI", included: true },
      { text: "Full API access", included: true },
    ],
    buttonText: "Contact Sales",
  },
]

const Pricing: React.FC<PricingSectionProps> = ({ yearly = false }) => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your Instagram engagement needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingData.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative overflow-hidden ${
                tier.highlighted
                  ? "border-primary ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-sm dark:text-black text-foreground">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    ${yearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className="text-gray-600">
                    /{yearly ? "year" : "month"}
                  </span>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check
                        size={20}
                        className={
                          feature.included ? "text-green-500" : "text-gray-300"
                        }
                      />
                      <span
                        className={!feature.included ? "text-gray-400" : ""}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have questions? Check out our{" "}
            <a href="#" className="text-primary underline">
              FAQ
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary underline">
              contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
