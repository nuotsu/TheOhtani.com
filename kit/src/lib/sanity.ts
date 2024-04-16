import { createClient } from '@sanity/client'
import { dev } from '$app/environment'

export { default as groq } from 'groq'

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2024-04-01',
	useCdn: !dev,
})
