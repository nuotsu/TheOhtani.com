<script lang="ts">
	import Count from '$ui/count.svelte'
	import Share from '$ui/share.svelte'
	import { ShowGrid, ShowGridToggle } from '$ui/show-grid'
	import Signature from '$ui/signature.svelte'
	import ViewCount from '$ui/view-count.svelte'
	import Face from './face.svelte'

	const inspiration = [
		{ label: 'S-2K', href: 'https://s-2k.webflow.io' },
		{ label: "Shopify Editions Winter '26", href: 'https://www.shopify.com/editions/winter2026' },
		{ label: 'New Balance', href: 'https://newbalance-ohtani.com' },
		{ label: 'Lando Norris', href: 'https://landonorris.com' },
	]
</script>

<footer
	id="footer"
	class="relative z-2 mt-[25lvh] grid-system min-h-lvh gap-y-0 overflow-clip *:pt-[2lh] max-md:bg-foreground *:max-md:col-span-full *:max-md:px-lh md:px-lh *:md:bg-foreground *:md:pb-lh"
>
	<hgroup class="flex flex-col justify-between max-md:contents">
		<div class="relative z-1 mr-auto max-w-max max-md:col-span-full max-md:px-lh max-md:pt-[2lh]">
			<h2 class="h2"><Count>The Ohtani.</Count></h2>
			<Signature
				class="absolute -right-[.8lh] -bottom-[.5ch] h-[2lh] translate-1/2"
				delay={6 * 0.1}
			/>
		</div>

		<Face />
	</hgroup>

	<menu>
		<li><Share /></li>
		<!-- <li><button>View on Awwwards</button></li> -->
		<li><ShowGridToggle /></li>
		<li><a class="link" href="https://github.com/nuotsu/theohtani.com">View on GitHub</a></li>
		<li><ViewCount /></li>
	</menu>

	<div>
		<h2 class="text-current/50">Inspiration / Credits:</h2>

		<ul>
			{#each inspiration as { label, href }}
				<li>
					<a class="link" {href}>{label}</a>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="flex justify-between gap-lh max-md:order-last max-md:pb-lh max-md:[--y:0]! md:flex-col"
	>
		<p>Created by <a class="link" href="https://nuotsu.dev">nuotsu</a></p>
		<small class="mt-auto text-right">© {new Date().getFullYear()}</small>
	</div>
</footer>

<ShowGrid />

<style>
	footer {
		view-timeline: --footer-timeline;

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
