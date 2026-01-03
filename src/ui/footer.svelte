<script lang="ts">
	import Share from '$ui/share.svelte'
	import ShowGrid from '$ui/show-grid.svelte'
	import Signature from '$ui/signature.svelte'
	import ViewCount from '$ui/view-count.svelte'

	const inspiration = [
		{ label: 'S-2K', href: 'https://s-2k.webflow.io' },
		{ label: "Shopify Editions Winter '26", href: 'https://www.shopify.com/editions/winter2026' },
		{ label: 'New Balance', href: 'https://newbalance-ohtani.com' },
		{ label: 'Lando Norris', href: 'https://landonorris.com' },
	]
</script>

<footer
	id="footer"
	class="relative z-1 grid-system min-h-lvh bg-foreground p-lh text-background *:max-md:col-span-full"
>
	<div>
		<hgroup class="relative max-w-max">
			<h2 class="h2">The Ohtani.</h2>
			<Signature class="absolute -right-[.8lh] -bottom-[.5ch] h-[2lh] translate-1/2" />
		</hgroup>
	</div>

	<menu>
		<li><Share /></li>
		<!-- <li><button>View on Awwwards</button></li> -->
		<li><a class="link" href="https://github.com/nuotsu/theohtani.com">View on GitHub</a></li>
		<li><ShowGrid /></li>
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

	<p>Created by <a class="link" href="https://nuotsu.dev">nuotsu</a></p>

	<small class="col-span-full mt-auto text-right">© 2025. All rights reserved.</small>
</footer>

<style>
	@media (width < 48rem) {
		footer {
			grid-template-rows: auto auto auto 1fr;
		}
	}
</style>
