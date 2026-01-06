<script lang="ts">
	let { class: className = '', src, gridsize = 13 } = $props()

	let container: HTMLDivElement | null = $state(null)

	// Track raw pointer position (null = no interaction yet)
	let pointerX = $state<number | null>(null)
	let pointerY = $state<number | null>(null)

	// Derive sprite indices from pointer position with weighted mapping
	let col = $derived.by(() => {
		if (pointerX === null || !container) return Math.floor(gridsize / 2)

		const rect = container.getBoundingClientRect()
		const centerX = rect.left + rect.width / 2
		const viewportWidth = window.innerWidth

		// Weighted X: component center divides viewport, each side maps to 50% of sprites
		let normalizedX: number
		if (pointerX <= centerX) {
			normalizedX = centerX > 0 ? (pointerX / centerX) * 0.5 : 0.5
		} else {
			const rightRange = viewportWidth - centerX
			normalizedX = rightRange > 0 ? 0.5 + ((pointerX - centerX) / rightRange) * 0.5 : 0.5
		}

		return Math.round(normalizedX * (gridsize - 1))
	})

	let row = $derived.by(() => {
		if (pointerY === null || !container) return Math.floor(gridsize / 2)

		const rect = container.getBoundingClientRect()
		const centerY = rect.top + rect.height / 2
		const viewportHeight = window.innerHeight

		// Weighted Y: component center divides viewport, each side maps to 50% of sprites
		let normalizedY: number
		if (pointerY <= centerY) {
			normalizedY = centerY > 0 ? (pointerY / centerY) * 0.5 : 0.5
		} else {
			const bottomRange = viewportHeight - centerY
			normalizedY = bottomRange > 0 ? 0.5 + ((pointerY - centerY) / bottomRange) * 0.5 : 0.5
		}

		// Invert Y: top-row sprites look down, bottom-row look up
		return gridsize - 1 - Math.round(normalizedY * (gridsize - 1))
	})

	function updatePointer(e: PointerEvent) {
		pointerX = e.clientX
		pointerY = e.clientY
	}
</script>

<svelte:window onpointerdown={updatePointer} onpointermove={updatePointer} />

<div bind:this={container} class="face-looker touch-none overflow-hidden select-none {className}">
	<enhanced:img
		style:--col={col}
		style:--row={row}
		style:scale={gridsize}
		{src}
		fetchpriority="low"
		alt="Shohei Ohtani"
		draggable="false"
	/>
</div>

<style>
	.face-looker > :global(*) {
		transform-origin: 0 0;
		translate: calc(var(--col) * -100%) calc(var(--row) * -100%);
		pointer-events: none;
	}
</style>
