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
	Show <kbd title={'Press "g" to toggle grid'}>g</kbd>rid
</label>
