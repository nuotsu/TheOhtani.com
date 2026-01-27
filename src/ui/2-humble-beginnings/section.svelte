<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Count from '$ui/count.svelte'
	import Field from './field.svelte'
</script>

<section
	id="humble-beginnings"
	class="relative grid-system overflow-clip bg-[#ddddd1] text-background max-md:pt-[5lh]!"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<Field />

	<header class="col-span-full grid md:row-[1/4] md:items-end">
		<h2 class="bottom-rlh h2 md:sticky">
			<Count stagger={0.03}>Humble Beginnings.</Count>
		</h2>
	</header>

	<div class="col-span-full row-[2/3] grid grid-cols-subgrid gap-lh *:space-y-ch">
		<div class="max-md:col-[1/-2]">
			<h3 class="font-serif text-2xl text-balance">Ōshū, Iwate Prefecture. July 5, 1994.</h3>
			<p>
				A small city in northern Japan where winter winds shape character and discipline is
				inherited.
			</p>
		</div>
		<div class="max-md:col-[2/-1] md:mt-lh">
			<h3 class="font-serif text-2xl text-balance">Young Shohei.</h3>
			<p>
				Young Shohei played baseball with his father, a factory worker. His mother, a former
				badminton player, taught him the value of dedication. Humble origins. Infinite ambition.
			</p>
		</div>
		<div class="max-md:col-[1/-2] md:mt-[2lh]">
			<h3 class="font-serif text-2xl text-balance">Hanamaki Higashi High School. 2010-2012.</h3>
			<p>
				Here he created his famous mandala chart—64 goals mapping the path to greatness. Every
				detail planned. Every sacrifice calculated.
			</p>
		</div>
		<div class="max-md:col-[2/-1] md:mt-[3lh]">
			<h3 class="font-serif text-2xl text-balance">Spring Kōshien. 2012.</h3>
			<p>
				His team fell short of glory, but the nation glimpsed his 100 mph fastball. Scouts circled.
				Destiny waited.
			</p>
		</div>
	</div>
</section>

<style>
	div p {
		animation: fade ease-in-out forwards;
		animation-timeline: view();
	}

	@keyframes fade {
		0% {
			opacity: 0;
			filter: blur(1ch);
		}

		25% {
			filter: none;
		}

		50% {
			opacity: 1;
		}
	}
</style>
