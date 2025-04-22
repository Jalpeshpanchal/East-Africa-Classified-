"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, LogIn, Menu, Search, UserCircle } from "lucide-react"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="border-b sticky top-0 z-50 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium">
                    Home
                  </Link>
                  <Link href="/jobs" className="text-lg font-medium">
                    Jobs
                  </Link>
                  <Link href="/classifieds" className="text-lg font-medium">
                    Classifieds
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    Contact Us
                  </Link>
                  {!isLoggedIn && (
                    <>
                      <Link href="/login" className="text-lg font-medium">
                        Login
                      </Link>
                      <Link href="/register" className="text-lg font-medium">
                        Register
                      </Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center space-x-2 ml-2 md:ml-0">
              <span className="text-xl font-bold bg-sky-600 text-white px-2 py-1 rounded">EAC</span>
              <span className="hidden md:inline-block font-semibold">East Africa Classifieds</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6 ml-10">
              <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 text-sm font-medium">
                    Jobs <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  <DropdownMenuItem asChild>
                    <Link href="/jobs/all">Browse All Jobs</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/jobs/technology">Technology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/jobs/healthcare">Healthcare</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/jobs/education">Education</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 text-sm font-medium">
                    Classifieds <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  <DropdownMenuItem asChild>
                    <Link href="/classifieds/all">All Classifieds</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/classifieds/vehicles">Vehicles</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/classifieds/real-estate">Real Estate</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/classifieds/electronics">Electronics</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/about" className="text-sm font-medium hover:text-teal-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center relative w-64">
              <Input type="search" placeholder="Search..." className="pr-8" />
              <Search className="absolute right-2 h-4 w-4 text-muted-foreground" />
            </form>
            <Button variant="ghost" size="icon" className="hidden sm:flex md:flex">
              <Search className="h-5 w-5 md:hidden" />
              <span className="sr-only">Search</span>
            </Button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <UserCircle className="h-6 w-6" />
                      <span className="sr-only">Open user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hidden md:flex">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
