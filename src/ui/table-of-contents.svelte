<script lang="ts">
	import { links } from '$lib/store'
</script>

<nav class="fixed top-1/2 left-0 -translate-y-1/2 mix-blend-difference">
	<ol>
		{#each links as link}
			<li>
				<a class="flex not-hover:transition-opacity hover:opacity-100" href={link.href}>
					{link.label}
				</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	ol:has(a:hover) a:not(:hover) {
		opacity: 0.5;
	}

	li {
		counter-increment: i;

		a {
			&::before {
				content: counter(i, upper-roman);
				text-align: center;
				width: 1lh;
			}
		}
	}
</style>
