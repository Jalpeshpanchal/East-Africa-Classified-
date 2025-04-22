"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  userType: z.enum(["job-seeker", "exporter", "importer", "admin"], {
    required_error: "Please select a user type",
  }),
})

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      userType: "job-seeker",
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="container max-w-md mx-auto py-10 px-4">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a user type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="job-seeker">Job Seeker</SelectItem>
                            <SelectItem value="exporter">Exporter</SelectItem>
                            <SelectItem value="importer">Importer</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-right">
                    <Link href="/forgot-password" className="text-sm text-sky-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Don't have an account?{" "}
                <Link href="/register" className="text-sky-600 hover:underline">
                  Register
                </Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Register to browse jobs, post classifieds, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6">
                <p className="mb-4">Please select your account type:</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/register/job-seeker">
                    <Button variant="outline" className="w-full h-auto py-6 flex flex-col">
                      <span className="text-lg font-medium mb-1">Job Seeker</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Find jobs & opportunities</span>
                    </Button>
                  </Link>
                  <Link href="/register/exporter">
                    <Button variant="outline" className="w-full h-auto py-6 flex flex-col">
                      <span className="text-lg font-medium mb-1">Exporter</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Export products & services</span>
                    </Button>
                  </Link>
                  <Link href="/register/importer">
                    <Button variant="outline" className="w-full h-auto py-6 flex flex-col">
                      <span className="text-lg font-medium mb-1">Importer</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Find products to import</span>
                    </Button>
                  </Link>
                  <Link href="/register/employer">
                    <Button variant="outline" className="w-full h-auto py-6 flex flex-col">
                      <span className="text-lg font-medium mb-1">Employer</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Post jobs & hire talent</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Already have an account?{" "}
                <Link href="/login" className="text-sky-600 hover:underline">
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
