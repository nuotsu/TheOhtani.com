<script lang="ts">
	let { rotateOffset = 0 } = $props()

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

<model-viewer
	bind:this={viewer}
	src="/baseball-cap.glb"
	alt="Baseball cap"
	camera-controls
	disable-tap
	disable-zoom
	interaction-prompt="none"
	exposure="0.5"
></model-viewer>

<style>
	model-viewer {
		display: block;
		width: 25vw;
		height: 25vw;
	}
</style>
