import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Briefcase, DollarSign, Layers, MoreHorizontal, Tag, UserPlus, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
            Create New
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+15%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Job Listings</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,567</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+7%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Classifieds</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,832</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$38,450</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+22%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Overview of recent platform activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 bg-teal-100 p-2 rounded-md dark:bg-teal-900/30">
                  <UserPlus className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New user registration</p>
                  <p className="text-xs text-muted-foreground">David Mutai from Kenya registered as a Job Seeker</p>
                </div>
                <div className="text-xs text-muted-foreground">2 mins ago</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-blue-100 p-2 rounded-md dark:bg-blue-900/30">
                  <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New job posting</p>
                  <p className="text-xs text-muted-foreground">TechCorp Ltd posted a Software Engineer position</p>
                </div>
                <div className="text-xs text-muted-foreground">45 mins ago</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-amber-100 p-2 rounded-md dark:bg-amber-900/30">
                  <Tag className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New classified ad</p>
                  <p className="text-xs text-muted-foreground">Sarah posted a Real Estate listing in Kampala</p>
                </div>
                <div className="text-xs text-muted-foreground">1 hour ago</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-green-100 p-2 rounded-md dark:bg-green-900/30">
                  <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Subscription payment</p>
                  <p className="text-xs text-muted-foreground">East African Imports upgraded to Premium plan</p>
                </div>
                <div className="text-xs text-muted-foreground">3 hours ago</div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 bg-purple-100 p-2 rounded-md dark:bg-purple-900/30">
                  <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Category updated</p>
                  <p className="text-xs text-muted-foreground">Admin added 3 new job categories</p>
                </div>
                <div className="text-xs text-muted-foreground">5 hours ago</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Insights</CardTitle>
            <CardDescription>Monthly revenue breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-2xl font-bold">$12,890</p>
                <p className="text-xs text-muted-foreground">Current month</p>
              </div>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Job Postings</p>
                  <p className="text-sm font-medium">$6,240</p>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full w-[48%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Premium Subscriptions</p>
                  <p className="text-sm font-medium">$4,320</p>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  <div className="h-full bg-teal-500 rounded-full w-[34%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Featured Listings</p>
                  <p className="text-sm font-medium">$2,330</p>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  <div className="h-full bg-amber-500 rounded-full w-[18%]" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full">
                <BarChart className="h-4 w-4 mr-2" />
                View Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Job Postings</CardTitle>
              <CardDescription>Latest jobs posted on the platform</CardDescription>
            </div>
            <Link href="/dashboard/jobs">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((job) => (
                <div key={job} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mr-3">
                      <Briefcase className="h-5 w-5 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Senior Software Engineer</p>
                      <p className="text-xs text-muted-foreground">TechCorp Ltd • Nairobi, Kenya</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Classified Ads</CardTitle>
              <CardDescription>Latest classifieds posted on the platform</CardDescription>
            </div>
            <Link href="/dashboard/classifieds">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((ad) => (
                <div key={ad} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mr-3">
                      <Tag className="h-5 w-5 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Toyota Land Cruiser 2020</p>
                      <p className="text-xs text-muted-foreground">Vehicles • Nairobi, Kenya</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
