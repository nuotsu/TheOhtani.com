<script lang="ts">
	import { intersectionObserver } from '$lib/intersection-observer'
	import { gsap } from 'gsap'
	import type { Snippet } from 'svelte'
	import type { SVGAttributes } from 'svelte/elements'

	let {
		children,
		options,
		delay,
		...props
	}: {
		children: Snippet
		options?: IntersectionObserverInit
		delay?: gsap.TweenValue
	} & SVGAttributes<SVGSVGElement> = $props()

	let elem: SVGSVGElement | null = $state(null)
	let timeline: gsap.core.Timeline | null = $state(null)

	function animatePaths() {
		const currentTimeline = timeline
		if (currentTimeline) currentTimeline.kill()

		const paths = elem?.querySelectorAll('path') ?? []
		const newTimeline = gsap.timeline({
			delay: typeof delay === 'number' ? delay : undefined,
		})
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

		const paths = elem?.querySelectorAll('path') ?? []
		gsap.set(paths, { drawSVG: '0%' })
	}

	$effect(() => {
		if (elem) {
			const paths = elem.querySelectorAll('path')
			gsap.set(paths, { drawSVG: '0%' })
		}
	})
</script>

<svg
	{...props}
	style:--delay={typeof delay === 'number' ? `${delay}s` : delay?.toString()}
	bind:this={elem}
	{@attach intersectionObserver((entry) => {
		if (entry.isIntersecting) {
			animatePaths()
		} else {
			resetPaths()
		}
	}, options)}
>
	{@render children()}
</svg>
