<header class="text-center grid place-content-center min-h-svh">
	<h1><span class="text-xl">TheOhtani</span><small>.com</small></h1>
</header>

{#each chapters as chapter}
	<Chapter {chapter} />
{/each}

<script lang="ts">
	import Chapter from '../ui/Chapter.svelte'

	const { data } = $props()
	const { chapters } = data
</script>
