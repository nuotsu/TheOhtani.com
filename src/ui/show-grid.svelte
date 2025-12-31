<script lang="ts">
	let checked = $state(false)
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'g') checked = !checked
	}}
/>

<label class="has-checked:line-through">
	<input type="checkbox" bind:checked hidden />
	Show <kbd>g</kbd>rid
</label>

<figure class="pointer-events-none fixed inset-0 grid-system w-screen px-lh mix-blend-screen">
	{#each Array(4) as _}
		<div class="bg-neutral-400/25"></div>
	{/each}
</figure>

<style>
	:global(body):not(:has(input:checked)) figure {
		display: none;
	}
</style>
