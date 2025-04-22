import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-sky-600 text-white px-2 py-1 rounded">EAC</span>
              <span className="font-semibold">East Africa Classifieds</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              The premier platform for job listings and classifieds across East Africa. Connect with employers, job
              seekers, and businesses in the region.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/jobs"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/classifieds"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Browse Classifieds
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">User Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Subscribe to our newsletter to receive updates on the latest jobs and classifieds.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-white dark:bg-zinc-800" />
              <Button className="w-full bg-sky-600 hover:bg-sky-700">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} East Africa Classifieds. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-500"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
