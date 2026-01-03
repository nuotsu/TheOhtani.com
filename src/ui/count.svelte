<script lang="ts">
	import { intersectionObserver } from '$lib/intersection-observer'
	import { gsap } from 'gsap'
	import { SplitText } from 'gsap/SplitText'

	let { children, class: className = '', stagger = 0.05 } = $props()

	let elem: HTMLSpanElement | null = $state(null)
	let isIntersecting = $state(false)

	$effect(() => {
		const split = new SplitText(elem, { type: 'chars' })
		const chars = split.chars

		gsap.set(chars, {
			opacity: 0,
			translateY: 8,
		})

		const timeline = gsap.timeline()

		timeline.to(chars, {
			opacity: 1,
			translateY: 0,
			stagger,
			ease: 'power2.out',
		})
	})
</script>

{#key isIntersecting}
	<span
		class="overflow-clip {className} {isIntersecting
			? 'opacity-100'
			: 'opacity-0'} transition-opacity"
		bind:this={elem}
		{@attach intersectionObserver((entry) => {
			isIntersecting = entry.isIntersecting
		})}
	>
		{@render children()}
	</span>
{/key}
