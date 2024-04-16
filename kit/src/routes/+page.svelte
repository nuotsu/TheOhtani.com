<header class="text-center sticky top-0">
	<h1>TheOhtani.com</h1>
</header>

{#each chapters as { images = [] }}
	<section>
		{#each images as image}
			<img src={urlFor(image).auto('format').url()} alt="" draggable={false} />
		{/each}
	</section>
{/each}

<script lang="ts">
	import { urlFor } from '$lib/sanity'

	const { data } = $props()
	const { chapters } = data
</script>
