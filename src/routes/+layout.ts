import { browser } from '$app/environment'
import { PUBLIC_POSTHOG_HOST, PUBLIC_POSTHOG_KEY } from '$env/static/public'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import posthog from 'posthog-js'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
	if (browser) {
		// Initialize GSAP plugins
		gsap.registerPlugin(DrawSVGPlugin)

		// Initialize PostHog
		posthog.init(PUBLIC_POSTHOG_KEY, {
			api_host: PUBLIC_POSTHOG_HOST,
			capture_pageview: false,
			capture_pageleave: false,
			capture_exceptions: true, // This enables capturing exceptions using Error Tracking
		})
	}
}
