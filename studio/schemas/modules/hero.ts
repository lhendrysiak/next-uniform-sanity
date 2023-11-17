import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'hero',
	title: 'Hero',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'headingPortableText',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'descriptionOrDate',
			title: 'Description/Date',
			type: 'string',
		}),
		defineField({
			title: 'Image',
			name: 'image',
			type: 'image',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				{
					title: 'Alt text',
					description: 'Overrides default alt text from media library',
					name: 'alt',
					type: 'string',
				},
			],
		}),
	],
});
