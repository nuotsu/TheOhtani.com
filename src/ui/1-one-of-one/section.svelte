<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import Count from '$ui/count.svelte'
	import P from '$ui/paragraph-reveal.svelte'
	import S from '$ui/strikethrough.svelte'
	import Images from './images.svelte'
</script>

<section
	id="one-of-one"
	class="relative grid-system overflow-x-clip pb-0!"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<h2 class=" col-span-full text-center h1">
		<Count>One of One.</Count><br />
		<Count>Two-Way Player.</Count><br />
		<Count type="words,chars">
			<S>Three</S> Four-Time MVP.
		</Count>
	</h2>

	<P
		class="col-span-full text-center text-xl leading-relaxed md:col-[2/-2]"
		options={{
			start: 'top 90%',
			end: 'top 30%',
		}}
	>
		In the {new Date().getFullYear() - 1876} years of Major League Baseball, there has never been another
		like him. A player who dominates as both pitcher and hitter. Who makes the impossible routine. Who
		exists in a category entirely his own.
	</P>

	<Images />
</section>
