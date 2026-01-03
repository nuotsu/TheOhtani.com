<script lang="ts">
	const seasons = [2021, 2022, 2023, 2024, 2025, 2026]

	const stats = ['Home runs']
</script>

<article class="col-span-full grid grid-cols-subgrid md:col-[2/3] md:row-[3/4]">
	<select class="col-span-full">
		<optgroup label="Season">
			{#each seasons as season}
				<option value={season} selected={season === new Date().getFullYear()}>
					{season} Season
				</option>
			{/each}
		</optgroup>

		<optgroup label="Career">
			<option value="career">Career</option>
		</optgroup>
	</select>

	<dl class="col-span-full grid grid-cols-subgrid gap-lh md:grid-cols-[auto_1fr]">
		{#each stats as stat}
			<dt class="text-right max-md:col-span-2">{stat}</dt>
			<dd class="tabular-nums max-md:col-span-2">0</dd>
		{/each}
	</dl>
</article>
