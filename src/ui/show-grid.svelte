<script lang="ts">
	let checked = $state(false)
</script>

<svelte:window on:keydown={(e) => e.key === 'g' && (checked = !checked)} />

<label class="has-checked:line-through">
	<input id="show-grid-system" type="checkbox" bind:checked hidden />
	Show <u class="decoration-current/25">g</u>rid system
</label>

<figure class="pointer-events-none fixed inset-0 grid-system before:m-auto after:m-auto">
	{#each Array(4) as _, i}
		<div class="bg-neutral-400/10 {i >= 6 && 'max-md:hidden'}"></div>
	{/each}
</figure>

<style>
	label:not(:has(:checked)) + figure {
		display: none;
	}

	:global(body:has(#show-grid-system:checked) [class*='col-']:not(.grid)) {
		outline: 0.5px solid color-mix(in srgb, var(--color-neutral-400) 25%, transparent);
	}

	u {
		text-decoration-skip-ink: none;
	}
</style>
