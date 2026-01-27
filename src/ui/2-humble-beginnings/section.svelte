<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Count from '$ui/count.svelte'
	import { gsap } from 'gsap'
	import Field from './field.svelte'

	let section: HTMLElement | null = $state(null)
	let track: HTMLDivElement | null = $state(null)

	$effect(() => {
		if (!section || !track) return

		const panels = track.querySelectorAll('.panel')
		const lastPanel = panels[panels.length - 1] as HTMLElement

		// Calculate scroll distance to center the last panel (with small buffer for narrow screens)
		const getScrollDistance = () => {
			const lastPanelCenter = lastPanel.offsetLeft + lastPanel.offsetWidth / 2
			const buffer = Math.min(50, window.innerWidth * 0.05)
			return lastPanelCenter - window.innerWidth / 2 + buffer
		}

		const endPadding = window.innerHeight * 1.5

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				pin: true,
				scrub: 1,
				start: 'top top',
				end: () => `+=${getScrollDistance() + endPadding}`,
				invalidateOnRefresh: true,
			},
		})

		tl.to(track, {
			x: () => -getScrollDistance(),
			ease: 'sine.inOut',
			duration: 1,
		})

		// Hold at end before unpinning
		tl.to({}, { duration: 0.2 })

		panels.forEach((panel, i) => {
			const isLast = i === panels.length - 1
			gsap.fromTo(
				panel,
				{ opacity: 0 },
				{
					opacity: 1,
					scrollTrigger: {
						trigger: panel,
						containerAnimation: tl,
						start: 'left 80%',
						end: isLast ? 'left 50%' : 'center center',
						scrub: true,
					},
				},
			)
		})

		return () => {
			tl.kill()
		}
	})
</script>

<section
	id="humble-beginnings"
	class="relative h-dvh overflow-clip bg-[#ddddd1] text-background"
	bind:this={section}
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<Field />

	<header class="absolute bottom-rlh left-rlh z-10">
		<h2 class="h2">
			<Count stagger={0.03}>Humble Beginnings.</Count>
		</h2>
	</header>

	<div class="flex h-full items-center">
		<div
			bind:this={track}
			class="track flex items-start gap-[10vw] pr-[calc(50vw-1lh)] pl-[80vw] will-change-transform *:shrink-0"
		>
			<div class="panel space-y-ch">
				<h3 class="font-serif text-2xl text-balance">Ōshū, Iwate Prefecture. July 5, 1994.</h3>
				<p>
					A small city in northern Japan where winter winds shape character and discipline is
					inherited.
				</p>
			</div>

			<div class="panel space-y-ch">
				<h3 class="font-serif text-2xl text-balance">Young Shohei.</h3>
				<p>
					Young Shohei played baseball with his father, a factory worker. His mother, a former
					badminton player, taught him the value of dedication. Humble origins. Infinite ambition.
				</p>
			</div>

			<div class="panel space-y-ch">
				<h3 class="font-serif text-2xl text-balance">Hanamaki Higashi High School. 2010-2012.</h3>
				<p>
					Here he created his famous mandala chart—64 goals mapping the path to greatness. Every
					detail planned. Every sacrifice calculated.
				</p>
			</div>

			<div class="panel space-y-ch">
				<h3 class="font-serif text-2xl text-balance">Spring Kōshien. 2012.</h3>
				<p>
					His team fell short of glory, but the nation glimpsed his 100 mph fastball. Scouts
					circled. Destiny waited.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.panel {
		padding-left: 1ch;
		width: min(30ch, 80vw);
	}
</style>
