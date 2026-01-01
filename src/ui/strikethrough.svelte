<script lang="ts">
	import { intersectionObserver } from '$lib/intersection-observer'
	import { gsap } from 'gsap'

	let { children } = $props()

	let offsetHeight = $state(0)
	let svg: SVGSVGElement | null = $state(null)
	let timeline: gsap.core.Timeline | null = $state(null)

	function animatePaths() {
		const currentTimeline = timeline
		if (currentTimeline) currentTimeline.kill()

		const paths = svg?.querySelectorAll('path') ?? []
		const newTimeline = gsap.timeline()
		timeline = newTimeline

		paths.forEach((path) => {
			newTimeline.fromTo(
				path,
				{ drawSVG: '0%' },
				{
					drawSVG: '100%',
					duration: 0.02,
					ease: 'power2.out',
				},
			)
		})
	}

	function resetPaths() {
		const currentTimeline = timeline
		if (currentTimeline) {
			currentTimeline.kill()
			timeline = null
		}

		const paths = svg?.querySelectorAll('path') ?? []
		gsap.set(paths, { drawSVG: '0%' })
	}

	$effect(() => {
		if (svg) {
			const paths = svg.querySelectorAll('path')
			gsap.set(paths, { drawSVG: '0%' })
		}
	})
</script>

<s
	class="relative"
	bind:offsetHeight
	{@attach intersectionObserver(
		(entry) => {
			if (entry.isIntersecting) {
				animatePaths()
			} else {
				resetPaths()
			}
		},
		{
			rootMargin: `0px 0px -${offsetHeight}px 0px`,
		},
	)}
>
	{@render children()}

	<svg
		bind:this={svg}
		class="absolute inset-0 h-full"
		width="150"
		height="27"
		viewBox="123.75 67.16549683 175.5 31.5521698"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- prettier-ignore -->
		<g fill="none" stroke="currentColor" stroke-linecap="round"><path d="m128.75 89.367c4.716-2.087 4.75-2 9.5-4" stroke-width="5.246"/><path d="m138.25 85.367c2.691-1.198 2.716-1.087 5.5-2" stroke-width="4.402"/><path d="m143.75 83.367c4.226-1.113 4.191-1.198 8.5-2" stroke-width="3.898"/><path d="m152.25 81.367c8.976-1.889 8.976-1.863 18-3.5" stroke-width="2.979"/><path d="m170.25 77.867c4.982-.903 4.976-.889 10-1.5" stroke-width="3.292"/><path d="m180.25 76.367c5.489-.75 5.482-.653 11-1" stroke-width="3.373"/><path d="m191.25 75.367c5.5 0 5.489-.25 11 0" stroke-width="3.345"/><path d="m202.25 75.367c4.847-.601 4.75 0 9.5 0" stroke-width="3.852"/><path d="m211.75 75.367c3.826.082 3.097.399 6 2" stroke-width="4.421"/><path d="m217.75 77.367c3.645 3.291 2.076 1.832 2.5 5.5" stroke-width="4.914"/><path d="m220.25 82.867c-4.36 4.809-2.355 4.541-9.5 8" stroke-width="4.621"/><path d="m210.75 90.867c-2.515.435-2.11 1.309-5 1" stroke-width="4.411"/><path d="m205.75 91.867c-2.951 1.148-3.015.685-6 1.5" stroke-width="4.207"/><path d="m199.75 93.367c-3.5 0-3.451.398-7 0" stroke-width="3.997"/><path d="m192.75 93.367c-3.239.789-3 0-6 0" stroke-width="4.108"/><path d="m186.75 93.367c-4.046-.957-2.489-.711-4.5-3" stroke-width="4.815"/><path d="m182.25 90.367c.427-3.798-.546-2.457 2.5-6" stroke-width="4.928"/><path d="m184.75 84.367c2.666-1.47 1.927-2.048 5.5-2.5" stroke-width="4.821"/><path d="m190.25 81.867c5.332-2.504 5.416-1.97 11-3.5" stroke-width="4.344"/><path d="m201.25 78.367c17.212-2.7 17.082-3.004 34.5-4.5" stroke-width="2.231"/><path d="m235.75 73.867c6.753-.184 6.712-.7 13.5-.5" stroke-width="2.747"/><path d="m249.25 73.367c9.245-.697 9.253-.434 18.5-1" stroke-width="2.708"/><path d="m267.75 72.367c6.027-.332 5.995-.197 12 0" stroke-width="3.044"/><path d="m279.75 72.367c3.003.483 3.027.168 6 1" stroke-width="3.738"/><path d="m285.75 73.367c4.247.766 4.253.733 8.5 1.5" stroke-width="3.733"/></g>
	</svg>
</s>

<style>
	s {
		text-decoration: none;
	}

	svg {
		width: calc(100% + 0.5ch);
		translate: -0.5ch 0;
		filter: drop-shadow(0 0 2px color-mix(in srgb, var(--color-background) 50%, transparent));
	}
</style>
