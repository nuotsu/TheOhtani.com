<script lang="ts">
	import Share from '$ui/share.svelte'
	import ShowGrid from '$ui/show-grid.svelte'
	import Signature from '$ui/signature.svelte'
</script>

<footer
	id="footer"
	class="grid-system min-h-lvh bg-foreground p-lh text-background *:max-md:col-span-full"
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
		<li><a href="https://github.com/nuotsu/theohtani.com">View on GitHub</a></li>
		<li><ShowGrid /></li>
	</menu>

	<div>
		<h2>Inspiration & Credits</h2>
		<ul>
			<li>
				<a href="https://s-2k.webflow.io">S-2K</a>
			</li>
		</ul>
	</div>

	<p>Created by <a href="https://nuotsu.dev">nuotsu</a></p>

	<small class="col-span-full mt-auto text-right">© 2025. All rights reserved.</small>
</footer>

<style>
	@media (width < 48rem) {
		footer {
			grid-template-rows: auto auto auto 1fr;
		}
	}
</style>
