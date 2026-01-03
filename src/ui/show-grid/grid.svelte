<figure class="pointer-events-none fixed inset-0 grid-system w-screen px-lh mix-blend-screen">
	{#each Array(4) as _}
		<div class="bg-neutral-400/25"></div>
	{/each}
</figure>

<style>
	:global(body):not(:has(#show-grid:checked)) figure {
		display: none;
	}

	:global(body:has(#show-grid:checked)) {
		:global(.grid-system, [class*='col-'], [class*='row-']) {
			outline: 0.5px solid color-mix(in srgb, currentColor 25%, transparent);
		}
	}
</style>
