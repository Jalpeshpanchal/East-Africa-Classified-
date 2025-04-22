import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  Building,
  CalendarDays,
  ChevronLeft,
  Clock,
  DollarSign,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Share2,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  // This would be fetched from an API in a real application
  const job = {
    id: params.id,
    title: "Senior Software Engineer",
    company: "TechCorp Ltd",
    location: "Nairobi, Kenya",
    salary: "$4,000 - $6,000 per month",
    employmentType: "Full-time",
    experienceLevel: "5+ years",
    education: "Bachelor's degree in Computer Science or related field",
    postedAt: "2 days ago",
    deadline: "May 30, 2023",
    category: "Technology",
    subCategory: "Software Development",
    logo: "/placeholder.svg?height=120&width=120",
    description: `
      <p>We are looking for a Senior Software Engineer to join our team and help us build scalable and robust applications.</p>
      
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design, develop, and maintain high-quality software</li>
        <li>Collaborate with cross-functional teams to define, design, and ship new features</li>
        <li>Mentor and provide guidance to junior developers</li>
        <li>Participate in code reviews and ensure code quality</li>
        <li>Work with product managers and designers to implement new user-facing features</li>
      </ul>
      
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of professional software development experience</li>
        <li>Strong proficiency in JavaScript, TypeScript, React, and Node.js</li>
        <li>Experience with database design and optimization</li>
        <li>Knowledge of software engineering best practices</li>
        <li>Excellent problem-solving skills</li>
        <li>Strong communication and collaboration abilities</li>
      </ul>
    `,
    benefits: [
      "Competitive salary package",
      "Medical, dental, and vision insurance",
      "Flexible working hours and remote work options",
      "Professional development opportunities",
      "Stock options",
      "25 days of paid vacation",
    ],
    companyInfo: {
      name: "TechCorp Ltd",
      description:
        "TechCorp is a leading technology company in East Africa, specializing in software development, cloud computing, and digital transformation services.",
      website: "https://techcorp.co.ke",
      employees: "50-200 employees",
      founded: "2010",
      headquarters: "Nairobi, Kenya",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/jobs"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-100 mb-6"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Job Listings
      </Link>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="w-16 h-16 flex-shrink-0 rounded-md bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {job.employmentType}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Building className="h-4 w-4 mr-1" />
                    <span className="text-sm">{job.company}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button className="bg-sky-600 hover:bg-sky-700">Apply Now</Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">Salary</p>
                        <p className="text-sm text-muted-foreground">{job.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">Job Type</p>
                        <p className="text-sm text-muted-foreground">{job.employmentType}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">Experience</p>
                        <p className="text-sm text-muted-foreground">{job.experienceLevel}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">Education</p>
                        <p className="text-sm text-muted-foreground">{job.education}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="h-5 w-5 mr-2 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">Posted</p>
                        <p className="text-sm text-muted-foreground">{job.postedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="h-5 w-5 mr-2 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">Deadline</p>
                        <p className="text-sm text-muted-foreground">{job.deadline}</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="job-description prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                </CardContent>
                <CardFooter className="px-6 py-4 border-t">
                  <Button className="bg-sky-600 hover:bg-sky-700 w-full">Apply for this Position</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="company" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-24 h-24 rounded-md bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={`${job.company} logo`}
                        className="h-full w-full object-contain p-4"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{job.companyInfo.name}</h3>
                      <p className="text-muted-foreground mb-4">{job.companyInfo.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Globe className="h-5 w-5 mr-2 text-zinc-500" />
                          <div>
                            <p className="text-sm font-medium">Website</p>
                            <a
                              href={job.companyInfo.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-sky-600 hover:underline flex items-center"
                            >
                              {job.companyInfo.website}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 mr-2 text-zinc-500" />
                          <div>
                            <p className="text-sm font-medium">Company Size</p>
                            <p className="text-sm text-muted-foreground">{job.companyInfo.employees}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <CalendarDays className="h-5 w-5 mr-2 text-zinc-500" />
                          <div>
                            <p className="text-sm font-medium">Founded</p>
                            <p className="text-sm text-muted-foreground">{job.companyInfo.founded}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-zinc-500" />
                          <div>
                            <p className="text-sm font-medium">Headquarters</p>
                            <p className="text-sm text-muted-foreground">{job.companyInfo.headquarters}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t flex justify-between">
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Company
                  </Button>
                  <Button variant="outline">View All Jobs</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="benefits" className="space-y-4 mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Benefits & Perks</h3>
                  <ul className="space-y-4">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1 mr-3 mt-0.5">
                          <svg
                            className="h-4 w-4 text-green-600 dark:text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-6 py-4 border-t">
                  <Button className="bg-sky-600 hover:bg-sky-700 w-full">Apply for this Position</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((job) => (
                  <Link key={job} href={`/jobs/${job}`} className="block">
                    <div className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-zinc-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium group-hover:text-teal-600">Software Engineer</h4>
                        <p className="text-xs text-muted-foreground">TechCorp • Nairobi</p>
                        <p className="text-xs text-muted-foreground mt-1">$3,500 - $5,000 • Full-time</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Job Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Job
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Email to Friend
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  Save Job
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Report Job
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
