<script lang="ts">
	import { activateTableOfContents, intersectionObserver } from '$lib/intersection-observer'
</script>

<section
	id="testament"
	class="grid-system p-lh"
	{@attach intersectionObserver(...activateTableOfContents)}
>
	<h2 class="top-rlh col-span-full mb-auto h2 md:sticky md:text-right">Testament.</h2>

	<div class="col-span-full grid grid-cols-subgrid gap-lh max-md:*:col-span-2 md:col-[2/4]">
		<p>
			Hokkaido Nippon-Ham Fighters, 2013. Drafted first overall. MLB teams beckoned immediately, but
			manager Hideki Kuriyama saw something rare: potential meeting patience.
		</p>
		<p>"Stay," Kuriyama said. "Master both crafts here first. Then conquer the world."</p>
		<p>
			Five years. 42 wins on the mound. 48 home runs at the plate. Pacific League MVP, 2016. The
			two-way dream wasn't fantasy—it was blueprint.
		</p>
		<p>
			Every strikeout proved the skeptics wrong. Every home run silenced the doubt. In NPB, Shohei
			Ohtani built the foundation for what modern baseball deemed impossible.
		</p>
	</div>

	<p class="col-span-full my-auto text-center text-balance md:col-[2/-2]">
		December 9, 2017. His testament complete. The posting granted. America awaited.
	</p>
</section>

<style>
	@media (width >= 48rem) {
		section {
			grid-template-rows: 1fr auto 1fr;
		}

		h2 {
			animation: fade ease-in-out;
			animation-timeline: view();
		}
	}

	@keyframes fade {
		50% {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
</style>
