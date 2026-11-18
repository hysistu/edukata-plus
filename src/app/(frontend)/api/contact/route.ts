import config from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string
      contact?: string
      message?: string
    }

    const name = body.name?.trim()
    const contact = body.contact?.trim()
    const message = body.message?.trim()

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Felder aus.' },
        { status: 400 },
      )
    }

    if (name.length > 120 || contact.length > 180 || message.length > 5000) {
      return NextResponse.json({ error: 'Eingabe ist zu lang.' }, { status: 400 })
    }

    const payload = await getPayload({ config })
    await payload.create({
      collection: 'messages',
      data: {
        name,
        contact,
        message,
        status: 'new',
      },
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Nachricht konnte nicht gespeichert werden.' },
      { status: 500 },
    )
  }
}
