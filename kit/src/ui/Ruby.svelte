<ruby>
	{@render children()}
	<rt>{portableText?.value?.annotation}</rt>
</ruby>

<style>
	ruby {
		ruby-align: center;
	}
</style>

<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte'

	const {
		children,
		portableText,
	}: {
		children: () => any
		portableText: MarkComponentProps<{
			annotation: string
		}>
	} = $props()

	console.log()
</script>
