import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import types from './studio/schemas';

export default defineConfig({
	basePath: '/studio',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	plugins: [deskTool(), visionTool()],
	schema: {
		types,
	},
});
