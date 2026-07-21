import { defineField, defineType } from 'sanity'

export const featuredCaseStudyType = defineType({
  name: 'featuredCaseStudy',
  title: 'Featured Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow Label',
      type: 'string',
      initialValue: 'Featured Case Study',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({
              name: 'variant',
              title: 'Style',
              type: 'string',
              options: {
                list: [
                  { title: 'Outline', value: 'outline' },
                  { title: 'Filled (red)', value: 'filled' },
                ],
                layout: 'radio',
              },
              initialValue: 'outline',
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'variant' },
          },
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Case Study Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caseStudyUrl',
      title: 'Case Study Link',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quoteStart',
      title: 'Quote — Opening Text',
      description: 'Text before the highlighted (red) portion',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'quoteHighlight',
      title: 'Quote — Highlighted Text (red)',
      type: 'string',
    }),
    defineField({
      name: 'quoteEnd',
      title: 'Quote — Closing Text',
      description: 'Text after the highlighted portion (include closing punctuation)',
      type: 'string',
    }),
    defineField({
      name: 'attribution',
      title: 'Quote Attribution',
      description: 'e.g. Tony Manfredi — Executive Director, Nevada Arts Council',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'projectName', subtitle: 'client', media: 'image' },
  },
})
