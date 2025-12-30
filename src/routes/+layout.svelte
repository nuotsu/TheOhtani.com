<script lang="ts">
	import { browser } from '$app/environment'
	import { afterNavigate, beforeNavigate } from '$app/navigation'
	import favicon from '$lib/assets/favicon.svg'
	import ShowGrid from '$ui/show-grid.svelte'
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

	<meta name="theme-color" content="#000" />
</svelte:head>

<!-- <Facade /> -->

{@render children()}

<fieldset class="col-[bleed] canvas bg-neutral-100 p-lh font-mono">
	<ShowGrid />
</fieldset>
