import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Tag } from "lucide-react"
import Link from "next/link"

const classifieds = [
  {
    id: 1,
    title: "Toyota Land Cruiser 2020",
    category: "Vehicles",
    subcategory: "Cars",
    price: "$45,000",
    location: "Nairobi, Kenya",
    postedAt: "1 day ago",
    featured: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "3 Bedroom Apartment for Rent",
    category: "Real Estate",
    subcategory: "Rentals",
    price: "$800/month",
    location: "Kampala, Uganda",
    postedAt: "3 days ago",
    featured: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: 'Apple MacBook Pro 16" 2023',
    category: "Electronics",
    subcategory: "Laptops",
    price: "$2,200",
    location: "Dar es Salaam, Tanzania",
    postedAt: "5 days ago",
    featured: false,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Professional Photography Services",
    category: "Services",
    subcategory: "Photography",
    price: "Negotiable",
    location: "Kigali, Rwanda",
    postedAt: "1 week ago",
    featured: false,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "iPhone 15 Pro Max - 256GB",
    category: "Electronics",
    subcategory: "Mobile Phones",
    price: "$1,100",
    location: "Nairobi, Kenya",
    postedAt: "2 days ago",
    featured: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Commercial Space for Rent",
    category: "Real Estate",
    subcategory: "Commercial",
    price: "$1,500/month",
    location: "Arusha, Tanzania",
    postedAt: "3 days ago",
    featured: false,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function RecentClassifieds() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classifieds.map((classified) => (
        <Link key={classified.id} href={`/classifieds/${classified.id}`}>
          <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[3/2] w-full relative overflow-hidden">
              <img
                src={classified.image || "/placeholder.svg"}
                alt={classified.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              {classified.featured && <Badge className="absolute top-2 right-2 bg-sky-600">Featured</Badge>}
            </div>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs capitalize">
                  {classified.category}
                </Badge>
                <span className="text-sm font-medium text-sky-600 dark:text-sky-500">{classified.price}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 line-clamp-1">{classified.title}</h3>
              <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="truncate">{classified.location}</span>
              </div>
            </CardContent>
            <CardFooter className="border-t px-5 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1 text-zinc-500 dark:text-zinc-400" />
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{classified.subcategory}</span>
              </div>
              <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                {classified.postedAt}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
