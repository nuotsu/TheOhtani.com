<script lang="ts">
	let scrollY = $state(0)
	let innerHeight = $state(0)
	let offsetHeight = $state(0)
	let progress = $derived(Math.max(0, Math.ceil((scrollY / (offsetHeight - innerHeight)) * 100)))
</script>

<svelte:window bind:scrollY bind:innerHeight />
<svelte:body bind:offsetHeight />

<aside
	id="progress"
	class="fixed right-0 bottom-0 z-2 px-ch tabular-nums mix-blend-difference [writing-mode:vertical-lr]"
>
	{progress}
	<small>mph</small>
</aside>

<style>
	#progress {
		transition:
			translate 0.5s ease-in-out,
			opacity 0.5s ease-in-out;

		&:not(:global(.in-view)) {
			translate: 100% 0;
			opacity: 0;
		}
	}
</style>
