import { defineField, defineType } from "sanity";

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document' as const,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'hero',
            validation: (Rule) => Rule.required(),
        }),
    ],
});