<script lang="ts">
	import { browser } from '$app/environment'
	import { afterNavigate, beforeNavigate } from '$app/navigation'
	import favicon from '$lib/assets/favicon.svg'
	import Footer from '$ui/footer.svelte'
	import posthog from 'posthog-js'
	import './app.css'

	let { children } = $props()

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'))
		afterNavigate(() => posthog.capture('$pageview'))
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<title>TheOhtani.com</title>
	<meta
		name="description"
		content="A special tribute to the greatest player in the history of baseball, Shohei Ohtani."
	/>
	<meta name="theme-color" content="#000" />
</svelte:head>

<!-- <Facade /> -->

{@render children()}

<Footer />
