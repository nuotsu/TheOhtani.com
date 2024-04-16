import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import structure from './src/structure'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
	name: 'default',
	title: 'TheOhtani.com',

	projectId: 'eh74p54x',
	dataset: 'production',

	plugins: [
		structureTool({ structure }),
		dashboardTool({
			widgets: [
				projectInfoWidget(),
				projectUsersWidget(),
				vercelWidget({ layout: { width: 'auto' } }),
			],
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})
