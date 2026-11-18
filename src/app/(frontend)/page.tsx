import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/sections/About'
import { Approach } from '@/components/sections/Approach'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Process } from '@/components/sections/Process'
import { Services } from '@/components/sections/Services'
import { getSiteContent } from '@/lib/site-content'

export default async function HomePage() {
  const content = await getSiteContent()

  return (
    <>
      <Header brand={content.brand} />
      <main>
        <Hero content={content} />
        <Services content={content.services} />
        <Approach content={content.approach} />
        <Process content={content.process} />
        <About
          accentUrl={content.aboutAccentUrl}
          content={content.about}
          portraitUrl={content.aboutPortraitUrl}
        />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </>
  )
}
