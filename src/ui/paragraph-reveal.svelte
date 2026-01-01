<script lang="ts">
	import { gsap } from 'gsap'
	import { SplitText } from 'gsap/SplitText'
	import type { Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'

	let {
		children,
		options = {
			end: 'top 0%',
		},
		...props
	}: {
		options?: ScrollTrigger.Vars
		children: Snippet
	} & HTMLAttributes<HTMLParagraphElement> = $props()

	let elem: HTMLParagraphElement | null = $state(null)

	$effect(() => {
		const split = new SplitText(elem, { type: 'words,chars' })
		const chars = split.chars

		gsap.set(chars, { opacity: 0 })

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: elem,
				scrub: true,
				...options,
			},
		})

		timeline.to(chars, {
			opacity: 1,
			stagger: 0.02,
			ease: 'power2.out',
		})

		return () => {
			timeline.kill()
			split.revert()
		}
	})
</script>

<p bind:this={elem} {...props}>
	{@render children()}
</p>
