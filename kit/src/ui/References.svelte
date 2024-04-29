<div class="carousel gap-4 !row-auto before:m-auto after:m-auto [--size:450px]">
	{#each references as r}
		{#if r._type === 'image'}
			image
		{:else if r._type === 'video'}
			<iframe
				style:aspect-ratio={r.aspectRatio}
				src={r.url}
				frameborder="0"
				title=""
			/>
		{/if}
	{/each}
</div>

<style>
	div {
		view-timeline-name: --reference;
		animation-timeline: --reference;
		animation-name: reference;
		animation-duration: 1s;
		animation-range: entry 50% entry 110%;
		animation-fill-mode: both;

		@media (max-width: 768px) {
			animation-range: entry 100% entry 200%;
		}
	}

	@keyframes reference {
		from {
			opacity: 0;
			scale: 0.8;
		}
	}
</style>

<script lang="ts">
	import type { Chapter } from '../types/sanity.types'

	const { references = [] }: { references: Chapter['references'] } = $props()
</script>
