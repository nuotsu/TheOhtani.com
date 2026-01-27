<script lang="ts">
	import src from '$assets/shohei-face-looker.webp'
	import FaceLooker from '$ui/face-looker.svelte'
	import SignatureJP from '$ui/signature/signature-jp.svelte'
</script>

<div
	class="relative mt-auto select-none max-md:order-last max-md:col-span-full max-md:px-lh max-md:pt-[2lh]"
>
	<figure class="relative w-full touch-none overflow-hidden max-md:w-[max(50%,200px)]">
		<enhanced:img
			src="$assets/shohei-face.jpg?w=1000"
			fetchpriority="low"
			alt="Shohei Ohtani"
			draggable="false"
		/>

		<FaceLooker
			{src}
			class="pointer-events-none absolute top-[23%] left-[51%] w-[40%] -translate-1/2"
		/>
	</figure>

	<div class="absolute top-[30%] left-[51%] -translate-1/2 rotate-90 md:top-[2%] md:left-[85%]">
		<SignatureJP class="h-[2lh] max-w-max lg:h-[2.7lh]" duration={0.017} />
	</div>
</div>

<style>
	figure {
		:global(.face-looker) {
			mask: radial-gradient(48% 45% at 50% 45%, black, black 86%, transparent 100%);
			animation: fade ease-in-out forwards;
			animation-timeline: --footer-timeline;
			opacity: 0;
		}
	}

	@keyframes fade {
		25%,
		100% {
			opacity: 1;
		}
	}
</style>
