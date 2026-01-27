<script lang="ts">
	import Count from '$ui/count.svelte'
	import SignatureEN from '$ui/signature/signature-en.svelte'
	import SignatureJP from '$ui/signature/signature-jp.svelte'
</script>

<header class="relative grid-system min-h-svh overflow-clip p-lh max-md:pb-[1.5lh]">
	<hgroup class="relative col-span-full mt-auto max-w-max max-md:row-[2/3] md:col-span-2">
		<h1 class="flex flex-col font-serif uppercase">
			<Count class="leading-none italic">Shohei</Count>
			<span class="h0 whitespace-nowrap">
				<Count>Ohtani</Count>
			</span>
		</h1>

		<SignatureEN class="absolute -right-lh bottom-0 h-[2lh] translate-1/2" delay={6 * 0.1} />
	</hgroup>

	<div class="mt-auto technical text-2xl text-balance max-md:space-y-ch md:col-span-2">
		<p>The player who <em>redefined impossible</em>.</p>
		<p>A digital monument to the greatest player of all time.</p>
	</div>

	<div class="absolute top-1/8 right-lh translate-x-1/2 rotate-90 md:top-1/2 md:-translate-y-1/2">
		<SignatureJP class="h-[3lh] max-w-max translate-y-1/2" delay={0.2} duration={0.026} />
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
