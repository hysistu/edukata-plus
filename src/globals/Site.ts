import type { GlobalConfig } from 'payload'

export const Site: GlobalConfig = {
  slug: 'site',
  label: 'Website Inhalt',
  admin: {
    description: 'Alle Inhalte der Startseite – Texte, Kontaktdaten und Platzhalter.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Allgemein',
          fields: [
            {
              name: 'brand',
              type: 'text',
              required: true,
              defaultValue: 'edukataplus',
            },
            {
              name: 'tagline',
              type: 'text',
              required: true,
              defaultValue:
                'Familienbegleitung · Jugendcoaching · Besuchsbegleitung · Raum Zürich',
            },
          ],
        },
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroHeadline',
              type: 'textarea',
              required: true,
              defaultValue:
                'Manchmal braucht eine Familie einfach jemanden, der mit am Tisch sitzt.',
            },
            {
              name: 'heroText',
              type: 'textarea',
              required: true,
              defaultValue:
                'Ich begleite Familien, Jugendliche und Eltern in Zürich und Umgebung, wenn es zu Hause gerade nicht rund läuft. Ohne erhobenen Zeigefinger, dafür mit Zeit, Geduld und einem klaren Blick von aussen.',
            },
            {
              name: 'heroPrimaryCta',
              type: 'text',
              defaultValue: 'Unverbindlich anfragen',
            },
            {
              name: 'heroSecondaryCta',
              type: 'text',
              defaultValue: 'Was ich anbiete',
            },
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero-Foto',
            },
            {
              name: 'heroImagePlaceholder',
              type: 'text',
              defaultValue:
                '[Foto: z. B. ein Porträt von Ihnen oder eine ruhige Alltagsszene]',
            },
          ],
        },
        {
          label: 'Angebot',
          fields: [
            {
              name: 'servicesHeadline',
              type: 'text',
              defaultValue: 'Wobei ich unterstütze',
            },
            {
              name: 'servicesIntro',
              type: 'textarea',
              defaultValue:
                'Jede Familie ist anders. Deshalb gibt es bei mir kein Programm, das abgespult wird. Wir schauen zuerst, was Sie brauchen, und dann, wie ich dabei helfen kann.',
            },
            {
              name: 'services',
              type: 'array',
              labels: { singular: 'Angebot', plural: 'Angebote' },
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  required: true,
                  defaultValue: 'home',
                  options: [
                    { label: 'Haus', value: 'home' },
                    { label: 'Person', value: 'person' },
                    { label: 'Personen', value: 'people' },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'text',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Arbeitsweise',
          fields: [
            {
              name: 'approachHeadline',
              type: 'text',
              defaultValue: 'Wie ich arbeite',
            },
            {
              name: 'approachIntro',
              type: 'textarea',
              defaultValue:
                'Ich glaube nicht daran, dass jemand von aussen kommt und alles in Ordnung bringt. Aber manchmal braucht es eine Person, die zuhört, mitdenkt und hilft, den Überblick zu behalten.',
            },
            {
              name: 'approachPoints',
              type: 'array',
              labels: { singular: 'Punkt', plural: 'Punkte' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'text', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Ablauf',
          fields: [
            {
              name: 'processHeadline',
              type: 'text',
              defaultValue: 'So fängt es an',
            },
            {
              name: 'processIntro',
              type: 'textarea',
              defaultValue:
                'Der erste Schritt ist meistens der schwerste. Darum ist er bei mir möglichst einfach.',
            },
            {
              name: 'processSteps',
              type: 'array',
              labels: { singular: 'Schritt', plural: 'Schritte' },
              fields: [
                { name: 'number', type: 'text', required: true },
                { name: 'title', type: 'text', required: true },
                { name: 'text', type: 'textarea', required: true },
              ],
            },
            {
              name: 'agenciesTitle',
              type: 'text',
              defaultValue: 'Für Fachstellen',
            },
            {
              name: 'agenciesText',
              type: 'textarea',
              defaultValue:
                'Ich arbeite im Auftrag von KESB, Sozialdiensten, Beistandspersonen und Schulen. Gerne bespreche ich einen möglichen Auftrag zuerst telefonisch mit Ihnen.',
            },
            {
              name: 'familiesTitle',
              type: 'text',
              defaultValue: 'Für Familien und Jugendliche',
            },
            {
              name: 'familiesText',
              type: 'textarea',
              defaultValue:
                'Sie können sich auch direkt bei mir melden. Wer die Kosten übernimmt, klären wir offen im ersten Gespräch. Stundenansatz: [IHR TARIF] CHF.',
            },
          ],
        },
        {
          label: 'Über mich',
          fields: [
            {
              name: 'aboutHeadline',
              type: 'text',
              defaultValue: 'Über mich',
            },
            {
              name: 'aboutIntro',
              type: 'text',
              defaultValue: 'Ich bin [IHR NAME], [IHRE AUSBILDUNG, z. B. Sozialpädagogin]',
            },
            {
              name: 'aboutAccentImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Kleines Bild (oben)',
            },
            {
              name: 'aboutPortrait',
              type: 'upload',
              relationTo: 'media',
              label: 'Porträtfoto',
            },
            {
              name: 'aboutPortraitPlaceholder',
              type: 'text',
              defaultValue: '[Porträtfoto]',
            },
            {
              name: 'aboutBody',
              type: 'array',
              labels: { singular: 'Absatz', plural: 'Absätze' },
              fields: [{ name: 'paragraph', type: 'textarea', required: true }],
            },
          ],
        },
        {
          label: 'Kontakt & Footer',
          fields: [
            {
              name: 'contactHeadline',
              type: 'text',
              defaultValue: 'Melden Sie sich einfach',
            },
            {
              name: 'contactText',
              type: 'textarea',
              defaultValue:
                'Ein Anruf verpflichtet zu nichts. Wenn ich nicht direkt abnehme, rufe ich zurück, meistens am gleichen Tag.',
            },
            {
              name: 'phone',
              type: 'text',
              defaultValue: '[TELEFONNUMMER]',
            },
            {
              name: 'email',
              type: 'email',
              defaultValue: 'info@edukataplus.ch',
            },
            {
              name: 'areaText',
              type: 'textarea',
              defaultValue:
                'Ich bin in der Stadt Zürich und der Region unterwegs, zum Beispiel [GEMEINDEN, z. B. Winterthur, Dietikon, Uster].',
            },
            {
              name: 'footerCopyright',
              type: 'text',
              defaultValue: '© 2026 edukataplus · [IHR NAME] · [ADRESSE]',
            },
            {
              name: 'impressumUrl',
              type: 'text',
              defaultValue: '/impressum',
            },
            {
              name: 'privacyUrl',
              type: 'text',
              defaultValue: '/datenschutz',
            },
          ],
        },
      ],
    },
  ],
}
