<script lang="ts">
	import { page } from '$app/state'
	import * as d3 from 'd3-geo'
	import * as topojson from 'topojson-client'
	import type { GeometryCollection } from 'topojson-specification'

	let { class: className = '' }: { class?: string } = $props()

	let worldData = $derived(page.data.worldData)

	let scrollY = $state(0)
	let innerHeight = $state(0)
	let container: HTMLElement | null = $state(null)
	let canvas: HTMLCanvasElement | null = $state(null)
	let canvasWidth = $state(0)
	let canvasHeight = $state(0)
	let dpr = $state(1)
	let sectionTop = $state(0)

	const tokyo: [number, number] = [139.69, 35.69]
	const losAngeles: [number, number] = [-118.24, 34.05]
	const interpolatePath = d3.geoInterpolate(tokyo, losAngeles)

	const animationStart = 0.5
	const animationEnd = 1.0
	const initialRotation: [number, number] = [-100, -30]
	const rotationRate = -100

	const graticule = d3.geoGraticule().step([20, 20])()
	const flightArc: GeoJSON.LineString = {
		type: 'LineString',
		coordinates: Array.from({ length: 100 }, (_, i) => interpolatePath(i / 99)),
	}

	let land = $derived(
		worldData ? topojson.feature(worldData, worldData.objects.land as GeometryCollection) : null,
	)

	let scrollProgress = $derived(
		innerHeight === 0 ? 0 : (scrollY - sectionTop + innerHeight) / innerHeight,
	)
	let clampedProgress = $derived(Math.max(0, scrollProgress))
	let planeProgress = $derived(
		Math.max(0, Math.min(1, (scrollProgress - animationStart) / (animationEnd - animationStart))),
	)
	let planePosition = $derived(interpolatePath(planeProgress))
	let rotation = $derived<[number, number, number]>([
		initialRotation[0] + rotationRate * clampedProgress,
		initialRotation[1],
		0,
	])

	function drawMarker(ctx: CanvasRenderingContext2D, pos: [number, number], label: string) {
		ctx.beginPath()
		ctx.arc(pos[0], pos[1], 5, 0, Math.PI * 2)
		ctx.fillStyle = 'white'
		ctx.fill()
		ctx.font = '12px system-ui, sans-serif'
		ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
		ctx.textAlign = 'center'
		ctx.fillText(label, pos[0], pos[1] - 12)
	}

	function drawPlane(ctx: CanvasRenderingContext2D, pos: [number, number], angle: number) {
		ctx.save()
		ctx.translate(pos[0], pos[1])
		ctx.rotate(angle)
		const s = 10
		ctx.beginPath()
		ctx.moveTo(s * 1.2, 0)
		ctx.lineTo(-s * 0.8, -s * 0.5)
		ctx.lineTo(-s * 0.4, 0)
		ctx.lineTo(-s * 0.8, s * 0.5)
		ctx.closePath()
		ctx.fillStyle = 'white'
		ctx.shadowColor = 'white'
		ctx.shadowBlur = 8
		ctx.fill()
		ctx.restore()
	}

	$effect(() => {
		dpr = window.devicePixelRatio || 1
	})

	$effect(() => {
		void scrollY
		if (container) {
			const rect = container.getBoundingClientRect()
			sectionTop = rect.top + window.scrollY
		}
	})

	$effect(() => {
		if (!container) return
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				canvasWidth = entry.contentRect.width
				canvasHeight = entry.contentRect.height
			}
		})
		observer.observe(container)
		return () => observer.disconnect()
	})

	$effect(() => {
		if (!canvas || !land || canvasWidth === 0 || canvasHeight === 0) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		canvas.width = canvasWidth * dpr
		canvas.height = canvasHeight * dpr
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
		ctx.clearRect(0, 0, canvasWidth, canvasHeight)

		const size = Math.min(canvasWidth, canvasHeight)
		const scale = size * 0.42
		const cx = canvasWidth / 2
		const cy = canvasHeight / 2

		const projection = d3
			.geoOrthographic()
			.scale(scale)
			.translate([cx, cy])
			.rotate(rotation)
			.clipAngle(90)
		const path = d3.geoPath(projection, ctx)

		ctx.beginPath()
		ctx.arc(cx, cy, scale, 0, Math.PI * 2)
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
		ctx.lineWidth = 1
		ctx.stroke()

		ctx.beginPath()
		path(graticule)
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)'
		ctx.lineWidth = 0.5
		ctx.stroke()

		ctx.beginPath()
		path(land)
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
		ctx.lineWidth = 0.75
		ctx.stroke()

		ctx.beginPath()
		path(flightArc)
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
		ctx.lineWidth = 1
		ctx.setLineDash([4, 6])
		ctx.stroke()
		ctx.setLineDash([])

		if (planeProgress > 0) {
			const n = Math.max(2, Math.ceil(planeProgress * 100))
			const traveledArc: GeoJSON.LineString = {
				type: 'LineString',
				coordinates: Array.from({ length: n }, (_, i) =>
					interpolatePath((i / (n - 1)) * planeProgress),
				),
			}
			ctx.beginPath()
			path(traveledArc)
			ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
			ctx.lineWidth = 2
			ctx.stroke()
		}

		const tokyoPos = projection(tokyo)
		if (tokyoPos) drawMarker(ctx, tokyoPos, 'Japan')

		const laPos = projection(losAngeles)
		if (laPos) drawMarker(ctx, laPos, 'Los Angeles')

		const planePos = projection(planePosition)
		if (planePos && planeProgress > 0 && planeProgress < 1) {
			const next = projection(interpolatePath(Math.min(planeProgress + 0.02, 1)))
			const prev = projection(interpolatePath(Math.max(planeProgress - 0.02, 0)))
			const angle = next && prev ? Math.atan2(next[1] - prev[1], next[0] - prev[0]) : 0
			drawPlane(ctx, planePos, angle)
		}
	})
</script>

<svelte:window bind:scrollY bind:innerHeight />

<figure bind:this={container} class="relative h-screen w-full {className}">
	<div class="flex h-full w-full items-center justify-center">
		<canvas bind:this={canvas} class="max-h-full max-w-full"></canvas>
	</div>
</figure>
