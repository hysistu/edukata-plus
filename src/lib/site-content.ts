import { getPayload } from 'payload'
import config from '@payload-config'

import { siteDefaults, type SiteContent } from '@/data/defaults'
import { getMediaUrl } from '@/lib/media'

export type ResolvedSiteContent = SiteContent & {
  heroImageUrl: string | null
  aboutAccentUrl: string | null
  aboutPortraitUrl: string | null
}

export async function getSiteContent(): Promise<ResolvedSiteContent> {
  try {
    const payload = await getPayload({ config })
    const site = await payload.findGlobal({ slug: 'site', depth: 1 })

    const services =
      site.services && site.services.length > 0
        ? site.services.map((item) => ({
            icon: (item.icon || 'home') as 'home' | 'person' | 'people',
            title: item.title,
            text: item.text,
          }))
        : siteDefaults.services.items

    const approachPoints =
      site.approachPoints && site.approachPoints.length > 0
        ? site.approachPoints.map((item) => ({
            title: item.title,
            text: item.text,
          }))
        : siteDefaults.approach.points

    const processSteps =
      site.processSteps && site.processSteps.length > 0
        ? site.processSteps.map((item) => ({
            number: item.number,
            title: item.title,
            text: item.text,
          }))
        : siteDefaults.process.steps

    const aboutBody =
      site.aboutBody && site.aboutBody.length > 0
        ? site.aboutBody.map((item) => item.paragraph)
        : siteDefaults.about.body

    return {
      brand: site.brand || siteDefaults.brand,
      tagline: site.tagline || siteDefaults.tagline,
      hero: {
        headline: site.heroHeadline || siteDefaults.hero.headline,
        text: site.heroText || siteDefaults.hero.text,
        primaryCta: site.heroPrimaryCta || siteDefaults.hero.primaryCta,
        secondaryCta: site.heroSecondaryCta || siteDefaults.hero.secondaryCta,
        imagePlaceholder:
          site.heroImagePlaceholder || siteDefaults.hero.imagePlaceholder,
      },
      services: {
        headline: site.servicesHeadline || siteDefaults.services.headline,
        intro: site.servicesIntro || siteDefaults.services.intro,
        items: services,
      },
      approach: {
        headline: site.approachHeadline || siteDefaults.approach.headline,
        intro: site.approachIntro || siteDefaults.approach.intro,
        points: approachPoints,
      },
      process: {
        headline: site.processHeadline || siteDefaults.process.headline,
        intro: site.processIntro || siteDefaults.process.intro,
        steps: processSteps,
        agencies: {
          title: site.agenciesTitle || siteDefaults.process.agencies.title,
          text: site.agenciesText || siteDefaults.process.agencies.text,
        },
        families: {
          title: site.familiesTitle || siteDefaults.process.families.title,
          text: site.familiesText || siteDefaults.process.families.text,
        },
      },
      about: {
        headline: site.aboutHeadline || siteDefaults.about.headline,
        intro: site.aboutIntro || siteDefaults.about.intro,
        portraitPlaceholder:
          site.aboutPortraitPlaceholder || siteDefaults.about.portraitPlaceholder,
        body: aboutBody,
      },
      contact: {
        headline: site.contactHeadline || siteDefaults.contact.headline,
        text: site.contactText || siteDefaults.contact.text,
        phone: site.phone || siteDefaults.contact.phone,
        email: site.email || siteDefaults.contact.email,
        area: site.areaText || siteDefaults.contact.area,
        formLabels: siteDefaults.contact.formLabels,
      },
      footer: {
        copyright: site.footerCopyright || siteDefaults.footer.copyright,
        impressumLabel: siteDefaults.footer.impressumLabel,
        privacyLabel: siteDefaults.footer.privacyLabel,
      },
      heroImageUrl: getMediaUrl(site.heroImage, 'hero'),
      aboutAccentUrl: getMediaUrl(site.aboutAccentImage, 'card'),
      aboutPortraitUrl: getMediaUrl(site.aboutPortrait, 'portrait'),
    }
  } catch {
    return {
      ...siteDefaults,
      heroImageUrl: null,
      aboutAccentUrl: null,
      aboutPortraitUrl: null,
    }
  }
}
