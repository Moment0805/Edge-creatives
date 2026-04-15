import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'client', type: 'string' }),
    defineField({ name: 'services', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'sectors', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'year', type: 'number' }),
    defineField({ name: 'featured', type: 'boolean' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
  ],
  orderings: [{ title: 'Year, New', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] }],
})
