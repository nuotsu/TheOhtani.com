<script lang="ts">
	const { class: className = '' } = $props()

	const links = [
		{ href: '#about', label: 'About' },
		{ href: '#childhood', label: 'Childhood' },
		{ href: '#teams', label: 'Teams' },
		{ href: '#records', label: 'Records' },
	]
</script>

<nav class={className}>
	<ol class="max-w-max">
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
</style>
