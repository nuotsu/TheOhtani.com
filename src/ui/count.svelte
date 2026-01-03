<script lang="ts">
	import { gsap } from 'gsap'
	import { SplitText } from 'gsap/SplitText'

	let { children, class: className = '' } = $props()

	let elem: HTMLSpanElement | null = $state(null)

	$effect(() => {
		const split = new SplitText(elem, { type: 'chars' })
		const chars = split.chars.filter((char) => !isNaN(Number(char.textContent)))

		gsap.set(chars, {
			opacity: 0,
			translateY: 8,
		})

		const timeline = gsap.timeline()

		timeline.to(chars, {
			opacity: 1,
			translateY: 0,
			stagger: 0.1,
			ease: 'power2.out',
		})
	})
</script>

<span class="overflow-clip {className}" bind:this={elem}>
	{@render children()}
</span>
