import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, Building, DollarSign, MapPin } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Ltd",
    location: "Nairobi, Kenya",
    salary: "$4,000 - $6,000",
    type: "Full-time",
    category: "Technology",
    postedAt: "2 days ago",
    featured: true,
    logo: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Brand Solutions",
    location: "Kampala, Uganda",
    salary: "$3,000 - $4,500",
    type: "Full-time",
    category: "Marketing",
    postedAt: "5 days ago",
    featured: true,
    logo: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    title: "Financial Analyst",
    company: "East African Bank",
    location: "Dar es Salaam, Tanzania",
    salary: "$2,800 - $3,800",
    type: "Full-time",
    category: "Finance",
    postedAt: "1 week ago",
    featured: true,
    logo: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 4,
    title: "Healthcare Administrator",
    company: "East Africa Medical Center",
    location: "Kigali, Rwanda",
    salary: "$3,200 - $4,200",
    type: "Full-time",
    category: "Healthcare",
    postedAt: "3 days ago",
    featured: false,
    logo: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 5,
    title: "Project Manager",
    company: "Construction Partners",
    location: "Nairobi, Kenya",
    salary: "$3,500 - $5,000",
    type: "Contract",
    category: "Construction",
    postedAt: "Just now",
    featured: false,
    logo: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 6,
    title: "Lead UI/UX Designer",
    company: "Digital Creatives",
    location: "Remote",
    salary: "$4,000 - $5,500",
    type: "Full-time",
    category: "Design",
    postedAt: "4 days ago",
    featured: true,
    logo: "/placeholder.svg?height=64&width=64",
  },
]

export function FeaturedJobs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <Link key={job.id} href={`/jobs/${job.id}`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-16 w-16 rounded-md bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 truncate">{job.title}</h3>
                    {job.featured && (
                      <Badge
                        variant="secondary"
                        className="ml-2 bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300"
                      >
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                    <Building className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{job.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
                    <DollarSign className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{job.salary}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-3 flex items-center justify-between">
              <div className="flex items-center">
                <BriefcaseBusiness className="h-4 w-4 mr-1 text-zinc-500 dark:text-zinc-400" />
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {job.type} • {job.category}
                </span>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{job.postedAt}</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
