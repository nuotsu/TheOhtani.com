<script lang="ts">
	import Cap from './cap.svelte'

	const teams = [
		'Hanamaki Higashi High School',
		'Hokkaido Nippon-Ham Fighters',
		'Team Japan',
		'Los Angeles Angels',
		'Los Angeles Dodgers',
	]
</script>

<aside class="overflow-clip text-center text-balance">
	<div class="flex flex-nowrap *:shrink-0 *:grow">
		{#each teams as team, i}
			<Cap rotateOffset={i * 90}>
				{team}
			</Cap>
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
