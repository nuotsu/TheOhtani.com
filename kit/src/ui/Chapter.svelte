<section
	class="relative grid items-end md:*:col-span-full md:*:row-span-full overflow-x-clip"
>
	{#if image}
		<img src={urlFor(image).auto('format').url()} alt="" draggable={false} />
	{/if}

	<div
		class={cn(
			'sticky bottom-0 p-4 md:p-8 text-center text-shadow md:text-lg [text-shadow:0_1px_1px_#0008]',
			isQuote && 'text-yellow-300',
		)}
	>
		<PortableText
			value={content}
			components={{
				marks: {
					ruby: Ruby,
				},
			}}
		/>
	</div>

	{#if !!references?.length}
		<References {references} />
	{/if}
</section>

<style>
	section {
		margin-bottom: min(25vh, 200px);
	}

	img {
		view-timeline-name: --image;
		animation-timeline: --image;
		animation-name: image;
		animation-duration: 1s;
		animation-range: entry 50% entry 110%;
		animation-fill-mode: both;

		@media (max-width: 768px) {
			animation-range: entry 100% entry 200%;
		}
	}

	@keyframes image {
		from {
			opacity: 0;
			scale: 0.8;
		}
	}
</style>

<script lang="ts">
	import type { Chapter } from '../types/sanity.types'
	import { urlFor } from '$lib/sanity'
	import { cn } from '$lib/utils.js'
	import { PortableText } from '@portabletext/svelte'
	import Ruby from '$/ui/Ruby.svelte'
	import References from './References.svelte'

	const { chapter }: { chapter: Chapter } = $props()
	const { image, content, isQuote, references } = chapter
</script>
