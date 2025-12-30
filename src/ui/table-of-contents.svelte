<script lang="ts">
	const { class: className = '' } = $props()

	const links = [
		{ href: '#one-of-one', label: 'One of One' },
		{ href: '#humble-beginnings', label: 'Humble Beginnings' },
		{ href: '#testament', label: 'Testament' },
		{ href: '#ascension', label: 'Ascension' },
		{ href: '#numbers', label: 'Numbers' },
		{ href: '#icon', label: 'Icon' },
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
