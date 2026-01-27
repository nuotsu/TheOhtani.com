<script lang="ts">
	import { gsap } from 'gsap'

	let pitchingShohei: HTMLDivElement | null = $state(null)
	let hittingShohei: HTMLDivElement | null = $state(null)

	let isMobile = $state(
		typeof window !== 'undefined' ? window.matchMedia('(max-width: 48rem)').matches : false,
	)

	$effect(() => {
		if (!pitchingShohei || !hittingShohei) return

		const section = document.getElementById('one-of-one')
		if (!section) return

		gsap.set(pitchingShohei, { opacity: 0, translateX: '-100%' })
		gsap.set(hittingShohei, { opacity: 0, translateX: '100%' })

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: `top ${isMobile ? '90%' : '75%'}`,
				end: `top ${isMobile ? '0%' : '25%'}`,
				scrub: true,
			},
		})

		timeline
			.to(pitchingShohei, {
				opacity: 0.5,
				translateX: isMobile ? '-25%' : 0,
				duration: 1,
				ease: 'power2.out',
			})
			.to(
				hittingShohei,
				{
					opacity: 0.5,
					translateX: isMobile ? '25%' : 0,
					duration: 1,
					ease: 'power2.out',
				},
				'<',
			)

		return () => {
			timeline.kill()
		}
	})
</script>

<svelte:window
	on:resize={() => {
		isMobile = window.matchMedia('(max-width: 48rem)').matches
	}}
/>

<figure
	class="pointer-events-none sticky bottom-0 -z-1 col-span-full flex items-end justify-between grayscale"
>
	<div id="pitching-shohei" class="transform-gpu will-change-transform" bind:this={pitchingShohei}>
		<enhanced:img
			src="$assets/pitching-shohei.png"
			loading="lazy"
			alt="Pitching Shohei Ohtani"
			draggable="false"
		/>
	</div>

	<div id="hitting-shohei" class="transform-gpu will-change-transform" bind:this={hittingShohei}>
		<enhanced:img
			src="$assets/hitting-shohei.png"
			loading="lazy"
			alt="Hitting Shohei Ohtani"
			draggable="false"
		/>
	</div>
</figure>

<style>
	figure :global(img) {
		height: 100%;
		width: auto;
	}

	#pitching-shohei {
		height: 50lvh;

		:global(img) {
			translate: 0 0.5ch;
		}
	}

	#hitting-shohei {
		height: 67lvh;

		:global(img) {
			translate: 0 1.5ch;
		}
	}
</style>
