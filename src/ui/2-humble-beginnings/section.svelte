<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Count from '$ui/count.svelte'
</script>

<section
	id="humble-beginnings"
	class="relative grid-system overflow-clip bg-[#ddddd1] text-background max-md:pt-[5lh]!"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<div class="absolute inset-x-0 top-0 mask-b-to-60%">
		<hr class="border-none" />
	</div>

	<header class="col-span-full grid md:row-[1/4] md:items-end">
		<h2 class="bottom-rlh h2 md:sticky">
			<Count stagger={0.03}>Humble Beginnings.</Count>
		</h2>
	</header>

	<div class="col-span-full row-[2/3] grid grid-cols-subgrid gap-lh">
		<p class="max-md:col-[1/-2]">
			Ōshū, Iwate Prefecture. July 5, 1994. A small city in northern Japan where winter winds shape
			character and discipline is inherited.
		</p>
		<p class="max-md:col-[2/-1] md:mt-lh">
			Young Shohei played baseball with his father, a factory worker. His mother, a former badminton
			player, taught him the value of dedication. Humble origins. Infinite ambition.
		</p>
		<p class="max-md:col-[1/-2] md:mt-[2lh]">
			Hanamaki Higashi High School, 2010-2012. Here he created his famous mandala chart—64 goals
			mapping the path to greatness. Every detail planned. Every sacrifice calculated.
		</p>
		<p class="max-md:col-[2/-1] md:mt-[3lh]">
			Spring Kōshien, 2012. His team fell short of glory, but the nation glimpsed his 100 mph
			fastball. Scouts circled. Destiny waited.
		</p>
	</div>
</section>

<style>
	hr {
		--height: 10lh;
		height: var(--height);
		background: 0% 100% / auto 100% url($assets/field.jpg) repeat-x;
		transform-origin: top;
		transform: perspective(var(--height)) rotateX(80deg);
		opacity: 0.75;
		animation: perspective linear;
		animation-timeline: view();
	}

	@keyframes perspective {
		to {
			background-position-x: 10vmin;
		}
	}
</style>
