<script lang="ts">
	import { gsap } from 'gsap'

	let hr: HTMLHRElement | null = $state(null)

	$effect(() => {
		if (!hr) return

		const section = document.getElementById('humble-beginnings')
		if (!section) return

		const track = section.querySelector('.track') as HTMLElement
		if (!track) return

		const scrollDistance = (track.scrollWidth - window.innerWidth) * 1.5

		const st = gsap.to(hr, {
			backgroundPositionX: '10vmin',
			ease: 'power2.out',
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: () => `+=${scrollDistance}`,
				scrub: 1,
				invalidateOnRefresh: true,
			},
		})

		return () => {
			st.scrollTrigger?.kill()
		}
	})
</script>

<div class="absolute inset-x-0 top-0">
	<div class="mask-b-to-60%">
		<hr bind:this={hr} class="border-none" />
	</div>
</div>

<style>
	hr {
		--height: 10lh;
		height: var(--height);
		background: 0% 100% / auto 100% url($assets/field.jpg) repeat-x;
		transform-origin: top;
		transform: perspective(var(--height)) rotateX(80deg);
		opacity: 0.75;
	}
</style>
