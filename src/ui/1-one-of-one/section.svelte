<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'

	const years = new Date().getFullYear() - 1876
</script>

<section
	id="one-of-one"
	class="grid-system p-lh"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<h2 class="*:inline-block max-md:col-span-2">
		<span>One of One.</span>
		<span>Two-Way Player.</span>
		<span><s>Three</s> Four-Time MVP.</span>
	</h2>

	<p class="max-md:col-[2/4]">
		In the {years} years of Major League Baseball, there has never been another like him. A player who
		dominates as both pitcher and hitter. Who makes the impossible routine. Who exists in a category entirely
		his own.
	</p>
</section>
