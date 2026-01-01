<script lang="ts">
	import { browser } from '$app/environment'
	import { afterNavigate, beforeNavigate } from '$app/navigation'
	import favicon from '$lib/assets/favicon.svg'
	import Shortcuts from '$ui/shortcuts.svelte'
	import posthog from 'posthog-js'
	import './app.css'

	let { children } = $props()

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'))
		afterNavigate(() => posthog.capture('$pageview'))
	}

	const metadata = {
		title: 'The Ohtani',
		description:
			'Shohei Ohtani: the player who redefined impossible. A digital monument to the greatest player of all time.',
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />

	<meta name="theme-color" content="#000" />
</svelte:head>

<Shortcuts />

{@render children()}
