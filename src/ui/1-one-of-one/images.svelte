<script lang="ts">
	import { ScrollTrigger } from 'gsap/ScrollTrigger'

	$effect(() => {
		return () => {}
	})
</script>

<figure
	class="pointer-events-none sticky bottom-0 col-span-full flex items-end justify-between grayscale"
>
	<div id="pitching-shohei">
		<enhanced:img
			src="$assets/pitching-shohei.png"
			loading="lazy"
			alt="Pitching Shohei Ohtani"
			draggable="false"
		/>
	</div>

	<div id="hitting-shohei">
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

	#pitching-shohei,
	#hitting-shohei {
		position: absolute;
		bottom: 0;
	}

	#pitching-shohei {
		left: 0;
		height: 50lvh;
	}

	#hitting-shohei {
		right: 0;
		height: 67lvh;

		:global(img) {
			translate: 0 0.8ch;
		}
	}
</style>
