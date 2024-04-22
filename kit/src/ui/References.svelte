<div
	class="absolute inset-0 left-auto ml-auto p-4 transition-all h-full flex flex-col *:sticky *:top-0 overflow-y-auto before:m-auto after:m-auto"
>
	{#each references as r}
		{#if r._type === 'image'}
			<!--  -->
		{:else if r._type === 'video'}
			<iframe
				class="w-[300px] md:w-[450px] shadow-xl rounded max-h-full"
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
		&:not(:hover) {
			filter: blur(2px);
			opacity: 0.6;
			scale: 0.5;

			@media (min-width: 769px) {
				translate: 60%;
			}

			& > * {
				pointer-events: none;
			}
		}
	}
</style>

<script lang="ts">
	import type { Chapter } from '../types/sanity.types'

	const { references = [] }: { references: Chapter['references'] } = $props()
</script>
