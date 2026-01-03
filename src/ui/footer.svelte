<script lang="ts">
	import Share from '$ui/share.svelte'
	import { ShowGrid, ShowGridToggle } from '$ui/show-grid'
	import Signature from '$ui/signature.svelte'
	import ViewCount from '$ui/view-count.svelte'
	import Count from './count.svelte'

	const inspiration = [
		{ label: 'S-2K', href: 'https://s-2k.webflow.io' },
		{ label: "Shopify Editions Winter '26", href: 'https://www.shopify.com/editions/winter2026' },
		{ label: 'New Balance', href: 'https://newbalance-ohtani.com' },
		{ label: 'Lando Norris', href: 'https://landonorris.com' },
	]
</script>

<footer
	id="footer"
	class="relative z-1 mt-[25lvh] grid-system min-h-lvh gap-y-0 overflow-clip *:pt-lh max-md:bg-foreground *:max-md:col-span-full *:max-md:px-lh md:px-lh *:md:bg-foreground *:md:pb-lh"
>
	<hgroup>
		<div class="relative max-w-max">
			<h2 class="h2"><Count>The Ohtani.</Count></h2>
			<Signature class="absolute -right-[.8lh] -bottom-[.5ch] h-[2lh] translate-1/2" />
		</div>
	</hgroup>

	<menu>
		<li><Share /></li>
		<!-- <li><button>View on Awwwards</button></li> -->
		<li><a class="link" href="https://github.com/nuotsu/theohtani.com">View on GitHub</a></li>
		<li><ShowGridToggle /></li>
		<li><ViewCount /></li>
	</menu>

	<div>
		<h2>Inspiration & Credits:</h2>
		<ul>
			{#each inspiration as { label, href }}
				<li>
					<a class="link" {href}>{label}</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="flex flex-col justify-between gap-lh max-md:pb-lh">
		<p>Created by <a class="link" href="https://nuotsu.dev">nuotsu</a></p>
		<small class="mt-auto text-right">© 2025. All rights reserved.</small>
	</div>
</footer>

<ShowGrid />

<style>
	footer {
		scroll-timeline: --footer-timeline;

		& > * {
			color: var(--color-background);
			box-shadow:
				-1lh 0 var(--color-foreground),
				1lh 0 var(--color-foreground);
			animation: slide ease-out forwards;
			animation-timeline: view();

			@media (width < 48rem) {
				--y: 2lh;
			}
		}
	}

	@keyframes slide {
		0% {
			translate: 0 var(--y, calc(sibling-index() * 8lh));
		}
		50% {
			translate: none;
		}
	}

	@media (width < 48rem) {
		footer {
			grid-template-rows: auto auto auto 1fr;
		}
	}
</style>
