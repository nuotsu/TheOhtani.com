<script lang="ts">
	let checked = $state(false)
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'g') checked = !checked
	}}
/>

<label class="link has-checked:line-through has-checked:decoration-current">
	<input id="show-grid" type="checkbox" bind:checked hidden />
	Show <kbd>g</kbd>rid
</label>

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
