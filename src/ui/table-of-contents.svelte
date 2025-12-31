<script lang="ts">
	import links from '$lib/links'
</script>

<nav>
	<ol class="grid max-w-max grid-cols-[auto_auto]">
		{#each links as link}
			<li class="col-span-full grid grid-cols-subgrid">
				<a
					class="col-span-full grid grid-cols-subgrid gap-ch not-hover:transition-opacity hover:opacity-100"
					href={link.href}
				>
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
			}
		}
	}
</style>
