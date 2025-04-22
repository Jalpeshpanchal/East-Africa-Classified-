import { Button } from "@/components/ui/button"
import { FeaturedCategories } from "@/components/featured-categories"
import { FeaturedJobs } from "@/components/featured-jobs"
import { HeroSection } from "@/components/hero-section"
import { RecentClassifieds } from "@/components/recent-classifieds"
import { UserTestimonials } from "@/components/user-testimonials"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <HeroSection />

      <section className="my-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Featured Categories</h2>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Categories
          </Button>
        </div>
        <FeaturedCategories />
      </section>

      <section className="my-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Featured Job Sectors</h2>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Jobs
          </Button>
        </div>
        <FeaturedJobs />
      </section>

      <section className="my-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Recent Classifieds</h2>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Classifieds
          </Button>
        </div>
        <RecentClassifieds />
      </section>

      <section className="my-12 bg-zinc-50 dark:bg-zinc-900 py-10 px-6 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-8">
          What Our Users Say
        </h2>
        <UserTestimonials />
      </section>
    </div>
  )
}
