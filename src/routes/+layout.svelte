<script lang="ts">
	import favicon from '$lib/assets/favicon.svg'
	import ShowGrid from '$ui/show-grid.svelte'
	import './app.css'
	import { browser } from '$app/environment'
	import { beforeNavigate, afterNavigate } from '$app/navigation'
	import posthog from 'posthog-js'

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

<main class="col-[bleed] grid grid-cols-subgrid">
	{@render children()}
</main>

<fieldset class="col-[bleed] canvas bg-neutral-100 p-lh font-mono">
	<ShowGrid />
</fieldset>

<style>
	main :global(> section) {
		position: relative;
	}
</style>
