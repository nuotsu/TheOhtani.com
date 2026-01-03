<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
	import P from '$ui/paragraph-reveal.svelte'
	import S from '$ui/strikethrough.svelte'
	import Images from './images.svelte'
</script>

<section
	id="one-of-one"
	class="relative grid-system overflow-x-clip p-lh"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<h2 class=" col-span-full text-center h1">
		One of One.<br />
		Two-Way Player.<br />
		<S>Three</S> Four-Time MVP.
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
