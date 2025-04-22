import {
  Building2,
  Car,
  HomeIcon,
  Laptop,
  ShoppingBag,
  Smartphone,
  LuggageIcon as Travel,
  Utensils,
} from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Vehicles",
    icon: Car,
    count: 1243,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    url: "/classifieds/vehicles",
  },
  {
    id: 2,
    name: "Real Estate",
    icon: HomeIcon,
    count: 956,
    color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
    url: "/classifieds/real-estate",
  },
  {
    id: 3,
    name: "Electronics",
    icon: Laptop,
    count: 1876,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    url: "/classifieds/electronics",
  },
  {
    id: 4,
    name: "Mobiles",
    icon: Smartphone,
    count: 1540,
    color: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
    url: "/classifieds/mobiles",
  },
  {
    id: 5,
    name: "Jobs",
    icon: Building2,
    count: 2358,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    url: "/jobs",
  },
  {
    id: 6,
    name: "Services",
    icon: ShoppingBag,
    count: 872,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400",
    url: "/classifieds/services",
  },
  {
    id: 7,
    name: "Travel",
    icon: Travel,
    count: 643,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400",
    url: "/classifieds/travel",
  },
  {
    id: 8,
    name: "Food",
    icon: Utensils,
    count: 761,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
    url: "/classifieds/food",
  },
]

export function FeaturedCategories() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.url}
          className="group flex flex-col items-center p-6 rounded-lg border bg-white dark:bg-zinc-800 hover:shadow-md transition-shadow"
        >
          <div className={`${category.color} p-3 rounded-full mb-3`}>
            <category.icon className="h-6 w-6" />
          </div>
          <h3 className="font-medium mb-1">{category.name}</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{category.count} Listings</p>
        </Link>
      ))}
    </div>
  )
}
