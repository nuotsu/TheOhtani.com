<script lang="ts">
	import TableOfContents from '$ui/table-of-contents.svelte'
</script>

<header
	class="sticky top-0 col-[content] grid min-h-svh grid-cols-subgrid gap-y-lh overflow-y-clip pt-ch pb-lh"
>
	<nav class="relative col-span-full row-[1/2]">
		<a href="/">TheOhtani.com</a>
	</nav>

	<hgroup class="relative z-1 col-[1/4] row-[2/3] md:col-[1/3]">
		<h1 class="flex flex-col">
			<i class="leading-0 uppercase">Shohei</i>
			<span class="font-serif text-[25vw] leading-none uppercase md:text-[10rem]">Ohtani</span>
		</h1>
		<h2 class="text-pretty">A tribute to the greatest player in the history of baseball.</h2>
	</hgroup>

	<div class="col-[3/-1] row-[2/4] flex items-end justify-end text-right">
		<b
			class="flex text-[50vw] leading-[0.7] text-transparent transition-colors text-trim hover:text-dodger-red"
			aria-label="17"
		>
			<span class="tracking-tighter">1</span>7
		</b>
	</div>

	<TableOfContents class="col-[1/3] row-[3/4] mt-auto" />
</header>

<style>
	header {
		grid-template-rows: 1fr auto auto;
	}

	b {
		-webkit-text-stroke: 1px var(--color-dodger-red);
	}
</style>
