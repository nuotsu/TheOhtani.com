<script lang="ts">
	import Cap from './cap.svelte'
</script>

<aside class="overflow-clip">
	<div class="flex flex-nowrap *:shrink-0 *:grow">
		{#each Array(5) as _, i}
			<Cap rotateOffset={i * 90} />
		{/each}
	</div>
</aside>

<style>
	div {
		animation: scroll linear;
		animation-timeline: view();
		will-change: translate;
	}

	@keyframes scroll {
		from {
			translate: 25%;
		}
		to {
			translate: -50%;
		}
	}
</style>
