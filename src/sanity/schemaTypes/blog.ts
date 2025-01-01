import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Automatically generated slug from the title',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      description: 'Main content of the blog post',
      of: [{ type: 'block' }], // This allows rich text
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: 'views',
      type: 'number',
      title: 'Views',
      description: 'Number of times this blog has been viewed',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'categories',
      type: 'string',
      title: 'categories',
      description: 'Number of times this blog has been viewed',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      description: 'Main image for the blog post',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
      description: 'When the blog post was published',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
