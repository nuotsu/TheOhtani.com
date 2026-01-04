<div class="absolute inset-x-0 top-0">
	<div class="mask-b-to-60%">
		<hr class="border-none" />
	</div>
</div>

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
