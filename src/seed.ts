import 'dotenv/config'
import { getPayload } from 'payload'

import config from './payload.config'
import { siteDefaults } from './data/defaults'

async function seed() {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'site',
    data: {
      brand: siteDefaults.brand,
      tagline: siteDefaults.tagline,
      heroHeadline: siteDefaults.hero.headline,
      heroText: siteDefaults.hero.text,
      heroPrimaryCta: siteDefaults.hero.primaryCta,
      heroSecondaryCta: siteDefaults.hero.secondaryCta,
      heroImagePlaceholder: siteDefaults.hero.imagePlaceholder,
      servicesHeadline: siteDefaults.services.headline,
      servicesIntro: siteDefaults.services.intro,
      services: siteDefaults.services.items,
      approachHeadline: siteDefaults.approach.headline,
      approachIntro: siteDefaults.approach.intro,
      approachPoints: siteDefaults.approach.points,
      processHeadline: siteDefaults.process.headline,
      processIntro: siteDefaults.process.intro,
      processSteps: siteDefaults.process.steps,
      agenciesTitle: siteDefaults.process.agencies.title,
      agenciesText: siteDefaults.process.agencies.text,
      familiesTitle: siteDefaults.process.families.title,
      familiesText: siteDefaults.process.families.text,
      aboutHeadline: siteDefaults.about.headline,
      aboutIntro: siteDefaults.about.intro,
      aboutPortraitPlaceholder: siteDefaults.about.portraitPlaceholder,
      aboutBody: siteDefaults.about.body.map((paragraph) => ({ paragraph })),
      contactHeadline: siteDefaults.contact.headline,
      contactText: siteDefaults.contact.text,
      phone: siteDefaults.contact.phone,
      email: siteDefaults.contact.email,
      areaText: siteDefaults.contact.area,
      footerCopyright: siteDefaults.footer.copyright,
      impressumUrl: '/impressum',
      privacyUrl: '/datenschutz',
    },
  })

  payload.logger.info('Website content seeded.')
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
