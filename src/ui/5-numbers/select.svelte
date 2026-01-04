<script lang="ts">
	let {
		value = $bindable(),
		options,
	}: {
		value: string
		options: string[]
	} = $props()

	let select: HTMLSelectElement | null = $state(null)
	let years = $derived(options.slice(1))
</script>

<fieldset class="col-span-full flex justify-center md:ml-auto">
	<button
		class="pr-ch transition-colors"
		onclick={() => {
			if (!select) return
			select.value = years[years.indexOf(select?.value ?? '') + 1] ?? years[0]
			select.dispatchEvent(new Event('change'))
		}}
		aria-label="Previous">{'〈'}</button
	>

	<select bind:this={select} class="appearance-none text-center tabular-nums" bind:value>
		<optgroup label="Season">
			{#each years as year}
				<option value={year}>{year} Season stats</option>
			{/each}
		</optgroup>
		<option value="career">Career stats</option>
	</select>

	<button
		class="pl-ch transition-colors"
		onclick={() => {
			if (!select) return
			select.value = years[years.indexOf(select?.value ?? '') - 1] ?? years[years.length - 1]
			select.dispatchEvent(new Event('change'))
		}}
		aria-label="Next">{'〉'}</button
	>
</fieldset>

<style>
	button:not(:is(:hover, :focus-visible)) {
		color: color-mix(in srgb, currentColor 50%, transparent);
	}
</style>
