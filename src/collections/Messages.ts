import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'contact', 'createdAt'],
    description: 'Anfragen über das Kontaktformular',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'contact',
      type: 'text',
      required: true,
      label: 'Telefon oder E-Mail',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Nachricht',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'Neu', value: 'new' },
        { label: 'In Bearbeitung', value: 'in-progress' },
        { label: 'Erledigt', value: 'done' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
