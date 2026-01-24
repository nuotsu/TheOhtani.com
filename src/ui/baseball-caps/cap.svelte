<script lang="ts">
	let { rotateOffset = 0, children } = $props()

	let scrollY = $state(0)
	let viewer: HTMLElement | null = $state(null)

	$effect(() => {
		import('@google/model-viewer')

		const modelViewer = viewer as any

		const setupLighting = () => {
			modelViewer.scene?.traverse((object: any) => {
				if (object.isDirectionalLight) {
					object.position.set(0, 1, 1).normalize()
					object.position.multiplyScalar(5)
					if (object.target) {
						object.target.position.set(0, -1, -1)
					}
				}
			})
		}

		if (modelViewer.loaded) {
			setupLighting()
		} else {
			modelViewer.addEventListener('load', setupLighting, { once: true })
		}
	})

	$effect(() => {
		if (!viewer) return

		let baseRotation = 0
		const speed = 0.005
		let frameId: number

		const animate = () => {
			baseRotation -= speed
			const scrollOffset = -scrollY / 500
			const rotateOffsetRad = (rotateOffset * Math.PI) / 180
			const rotation = baseRotation + scrollOffset + rotateOffsetRad
			viewer!.setAttribute('camera-orbit', `${rotation}rad 90deg 100%`)
			frameId = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			cancelAnimationFrame(frameId)
		}
	})
</script>

<svelte:window bind:scrollY />

<figure class="group relative select-none">
	<model-viewer
		src="/models/baseball-cap.glb"
		alt="Baseball cap"
		camera-controls
		disable-tap
		disable-zoom
		interaction-prompt="none"
		exposure="0.5"
		bind:this={viewer}
	>
	</model-viewer>

	<h2
		class="pointer-events-none absolute inset-0 z-1 grid place-content-center font-serif leading-none mix-blend-difference transition-opacity group-not-hover:opacity-0 md:h3"
	>
		{@render children()}
	</h2>
</figure>

<style>
	model-viewer {
		--columns: 5;
		display: block;
		width: calc(100vw / var(--columns));
		height: calc(100vw / var(--columns));

		@supports (animation-timeline: view()) {
			--columns: 4;
		}
	}
</style>
