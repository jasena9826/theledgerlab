import { About } from '@/components/about'
import { CareerToolkit } from '@/components/career-toolkit'
import { Connect } from '@/components/connect'
import { Currently } from '@/components/currently'
import { Expertise } from '@/components/expertise'
import { FeaturedWork } from '@/components/featured-work'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <FeaturedWork />
        <Currently />
        <CareerToolkit />
        <Connect />
      </main>
      <SiteFooter />
    </>
  )
}
