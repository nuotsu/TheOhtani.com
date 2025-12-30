<label class="group">
	<input id="show-grid-system" type="checkbox" />
	<span class="group-has-checked:hidden">Show</span>
	<span class="group-not-has-checked:hidden">Hide</span>
	grid system
</label>

<figure class="pointer-events-none fixed inset-0 grid-system px-lh">
	{#each Array(12) as _, i}
		<div class="bg-neutral-400/5 {i >= 6 && 'max-md:hidden'}"></div>
	{/each}
</figure>

<style>
	label:not(:has(:checked)) + figure {
		display: none;
	}

	:global(body:has(#show-grid-system:checked) [class*='col-span-']) {
		outline: 0.5px solid color-mix(in srgb, var(--color-neutral-400) 25%, transparent);
	}
</style>
