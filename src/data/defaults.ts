export const siteDefaults = {
  brand: 'edukataplus',
  tagline:
    'Familienbegleitung · Jugendcoaching · Besuchsbegleitung · Raum Zürich',
  hero: {
    headline: 'Manchmal braucht eine Familie einfach jemanden, der mit am Tisch sitzt.',
    text: 'Ich begleite Familien, Jugendliche und Eltern in Zürich und Umgebung, wenn es zu Hause gerade nicht rund läuft. Ohne erhobenen Zeigefinger, dafür mit Zeit, Geduld und einem klaren Blick von aussen.',
    primaryCta: 'Unverbindlich anfragen',
    secondaryCta: 'Was ich anbiete',
    imagePlaceholder:
      '[Foto: z. B. ein Porträt von Ihnen oder eine ruhige Alltagsszene]',
  },
  services: {
    headline: 'Wobei ich unterstütze',
    intro:
      'Jede Familie ist anders. Deshalb gibt es bei mir kein Programm, das abgespult wird. Wir schauen zuerst, was Sie brauchen, und dann, wie ich dabei helfen kann.',
    items: [
      {
        icon: 'home' as const,
        title: 'Sozialpädagogische Familienbegleitung',
        text: 'Wenn der Alltag überfordert, die Schule anruft oder Konflikte eskalieren. Ich komme zu Ihnen nach Hause und wir finden zusammen Schritte, die im echten Leben funktionieren – nicht nur auf dem Papier.',
      },
      {
        icon: 'person' as const,
        title: 'Jugendcoaching',
        text: 'Für Jugendliche und junge Erwachsene, die sich festgefahren fühlen – in der Schule, bei der Lehrstelle, zu Hause oder bei sich selbst. Coaching muss kein Büro sein. Manchmal ist ein Spaziergang am See oder ein Kaffee in der Stadt der bessere Rahmen.',
      },
      {
        icon: 'people' as const,
        title: 'Besuchsbegleitung',
        text: 'Begleitete Besuche zwischen Eltern und Kindern, wenn das so angeordnet oder gewünscht ist. Ich sorge dafür, dass die Zeit sicher und möglichst entspannt verläuft – und bleibe im Hintergrund, solange es geht. Danach gibt es einen kurzen Bericht.',
      },
    ],
  },
  approach: {
    headline: 'Wie ich arbeite',
    intro:
      'Ich glaube nicht daran, dass jemand von aussen kommt und alles in Ordnung bringt. Aber manchmal braucht es eine Person, die zuhört, mitdenkt und hilft, den Überblick zu behalten.',
    points: [
      {
        title: 'Ehrlich',
        text: 'Ich sage, was ich sehe. Freundlich, aber ohne um den heissen Brei herumzureden.',
      },
      {
        title: 'Im Alltag',
        text: 'Ich komme dorthin, wo das Leben stattfindet – an den Küchentisch, in den Schulweg, zum Amtstermin.',
      },
      {
        title: 'Verschwiegen',
        text: 'Was Sie mir erzählen, bleibt bei mir. Ausnahmen nur, wenn das Kindeswohl gefährdet ist – und auch dann spreche ich zuerst mit Ihnen.',
      },
    ],
  },
  process: {
    headline: 'So fängt es an',
    intro:
      'Der erste Schritt ist meistens der schwerste. Darum ist er bei mir möglichst einfach.',
    steps: [
      {
        number: '01',
        title: 'Anrufen oder schreiben',
        text: 'Erzählen Sie kurz, worum es geht. Das muss nicht geordnet oder vollständig sein.',
      },
      {
        number: '02',
        title: 'Kennenlernen',
        text: 'Wir treffen uns und schauen, ob es zwischen uns passt. Das ist wichtiger, als man denkt.',
      },
      {
        number: '03',
        title: 'Ziele klären',
        text: 'Was soll sich ändern? Wie oft sehen wir uns? Wer ist sonst noch beteiligt, zum Beispiel eine Beistandsperson oder der Sozialdienst?',
      },
      {
        number: '04',
        title: 'Losgehen',
        text: 'Wir legen los und schauen regelmässig zurück: Was hat sich bewegt, was braucht es noch?',
      },
    ],
    agencies: {
      title: 'Für Fachstellen',
      text: 'Ich arbeite im Auftrag von KESB, Sozialdiensten, Beistandspersonen und Schulen. Gerne bespreche ich einen möglichen Auftrag zuerst telefonisch mit Ihnen.',
    },
    families: {
      title: 'Für Familien und Jugendliche',
      text: 'Sie können sich auch direkt bei mir melden. Wer die Kosten übernimmt, klären wir offen im ersten Gespräch. Stundenansatz: [IHR TARIF] CHF.',
    },
  },
  about: {
    headline: 'Über mich',
    intro: 'Ich bin [IHR NAME], [IHRE AUSBILDUNG, z. B. Sozialpädagogin]',
    portraitPlaceholder: '[Porträtfoto]',
    body: [
      '[HF / FH]. Seit [ANZAHL] Jahren arbeite ich mit Familien und Jugendlichen – unter anderem in [FRÜHERE STELLEN ODER SCHWERPUNKTE].',
      'Mit edukataplus möchte ich das tun, was mir am wichtigsten ist: nah am Alltag arbeiten, ohne Schema F, und Menschen ernst nehmen – auch wenn es kompliziert wird.',
      'Ich spreche Deutsch, Schweizerdeutsch und [WEITERE SPRACHEN].',
    ],
  },
  contact: {
    headline: 'Melden Sie sich einfach',
    text: 'Ein Anruf verpflichtet zu nichts. Wenn ich nicht direkt abnehme, rufe ich zurück, meistens am gleichen Tag.',
    phone: '[TELEFONNUMMER]',
    email: 'info@edukataplus.ch',
    area: 'Ich bin in der Stadt Zürich und der Region unterwegs, zum Beispiel [GEMEINDEN, z. B. Winterthur, Dietikon, Uster].',
    formLabels: {
      name: 'Name',
      contact: 'Telefon oder E-Mail',
      message: 'Worum geht es? (ein paar Worte reichen)',
      submit: 'Nachricht senden',
    },
  },
  footer: {
    copyright: '© 2026 edukataplus · [IHR NAME] · [ADRESSE]',
    impressumLabel: 'Impressum',
    privacyLabel: 'Datenschutz',
  },
}

export type SiteContent = typeof siteDefaults
