<script lang="ts">
	import Count from '$ui/count.svelte'
	import Signature from '$ui/signature.svelte'
</script>

<header class="grid-system min-h-svh p-lh">
	<hgroup class="relative col-span-full mt-auto max-w-max max-md:row-[2/3] md:col-span-2">
		<h1 class="flex flex-col font-serif uppercase">
			<Count class="leading-none italic">Shohei</Count>
			<span class="h0 whitespace-nowrap">
				<Count>Ohtani</Count>
			</span>
		</h1>

		<Signature class="absolute -right-lh bottom-0 h-[2lh] translate-1/2" delay={6 * 0.1} />
	</hgroup>

	<div class="mt-auto max-md:space-y-ch md:col-span-2 text-lg md:text-xl technical text-balance">
		<p>The player who redefined impossible.</p>
		<p>A digital monument to the greatest player of all time.</p>
	</div>
</header>

<style>
	@media (width < 48rem) {
		header {
			grid-template-rows: 1fr auto;
		}

		div {
			grid-column: 2 / -1;
			grid-row: 1 / 2;
			text-align: right;
			text-wrap: balance;
		}
	}
</style>
