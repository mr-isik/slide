import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Box } from "lucide-react"
import Link from "next/link"

type MenuLinkProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const WebsiteNav = () => {
  return (
    <div className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Main Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium mx-3">
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium mx-3">
                Features
              </Link>
            </NavigationMenuItem>

            {/* Resources Dropdown with Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[900px] grid-cols-4 gap-4 p-6">
                  {/* Explore Our Solutions */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">
                      Explore Our Solutions
                    </h3>
                    <div className="space-y-4">
                      <MenuLink
                        icon={<Box size={20} />}
                        title="AI Messaging"
                        description="Automate your Instagram interactions effortlessly."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Comment Management"
                        description="Engage with your audience in real-time."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Lead Generation"
                        description="Turn conversations into valuable opportunities."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Integration Tools"
                        description="Seamless integration with your existing platforms."
                      />
                    </div>
                  </div>

                  {/* More Features */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">More Features</h3>
                    <div className="space-y-4">
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Customer Support"
                        description="We're here to help you succeed."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Blog Insights"
                        description="Stay updated with the latest trends."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Case Studies"
                        description="See how others have succeeded with Slide."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="About Us"
                        description="Learn more about our mission and values."
                      />
                    </div>
                  </div>

                  {/* Get Started */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Get Started</h3>
                    <div className="space-y-4">
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Contact Us"
                        description="Reach out for inquiries or support."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Testimonials"
                        description="Hear from our satisfied customers."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="FAQs"
                        description="Find answers to common questions."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Privacy Policy"
                        description="Understand how we protect your data."
                      />
                    </div>
                  </div>

                  {/* Join Our Community */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">
                      Join Our Community
                    </h3>
                    <div className="space-y-4">
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Events"
                        description="Participate in our upcoming webinars."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Partnerships"
                        description="Collaborate with us for mutual growth."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Careers"
                        description="Join our innovative team today."
                      />
                      <MenuLink
                        icon={<Box size={20} />}
                        title="Press Releases"
                        description="Stay informed about our latest news."
                      />
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium mx-3">
                Pricing
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="outline">Learn</Button>
          <Button>Explore</Button>
        </div>
      </div>

      {/* Sign up banner */}
    </div>
  )
}

const MenuLink = ({ icon, title, description }: MenuLinkProps) => (
  <NavigationMenuLink asChild>
    <Link
      href="#"
      className="flex items-start gap-3 rounded p-2 hover:bg-gray-100"
    >
      <div className="mt-1 text-muted-foreground">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  </NavigationMenuLink>
)

export default WebsiteNav
