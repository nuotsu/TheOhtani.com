<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Strike from '$ui/strike.svelte'

	const years = new Date().getFullYear() - 1876
</script>

<section
	id="one-of-one"
	class="grid-system p-lh"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<header class="row-[1/2] max-md:col-span-full">
		<h2 class="top-rlh h2 *:inline-block md:sticky">
			<span>One of One.</span>
			<span>Two-Way Player.</span>
			<span><Strike>Three</Strike> Four-Time MVP.</span>
		</h2>
	</header>

	<p class="col-[2/-1] row-[2/3] md:col-[2/-2]">
		In the {years} years of Major League Baseball, there has never been another like him. A player who
		dominates as both pitcher and hitter. Who makes the impossible routine. Who exists in a category entirely
		his own.
	</p>
</section>
