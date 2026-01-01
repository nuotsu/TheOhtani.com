<script lang="ts">
	import { intersectionObserver } from '$lib/intersection-observer'

	let { class: className = '' } = $props()
</script>

<enhanced:img
	class="w-auto text-transparent {className}"
	src="$assets/signature.png"
	alt="Shohei Ohtani's signature"
	loading="eager"
	fetchpriority="high"
	draggable="false"
	{@attach intersectionObserver((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('in-view')
		} else {
			entry.target.classList.remove('in-view')
		}
	})}
/>

<style>
	@property --progress {
		initial-value: 0%;
		inherits: false;
		syntax: '<percentage>';
	}

	:global(img) {
		mask-image: linear-gradient(to bottom right, #000 var(--progress), transparent var(--progress));

		&:global(.in-view) {
			--progress: 100%;
			transition: --progress 1.2s ease-in-out;
		}
	}

	@keyframes signature {
		from {
			--progress: 0%;
		}
		to {
			--progress: 100%;
		}
	}
</style>
