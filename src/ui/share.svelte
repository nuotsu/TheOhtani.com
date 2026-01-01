<script lang="ts">
	let copied = $state(false)
</script>

{#if 'share' in navigator}
	<button
		class="link"
		onclick={() => {
			navigator.share({
				title: 'TheOhtani.com',
				text: 'Check out this tribute to Shohei Ohtani',
				url: window.location.href,
			})
		}}
	>
		Share this tribute
	</button>
{:else if 'clipboard' in navigator}
	<button
		class="link"
		onclick={() => {
			navigator.clipboard.writeText(window.location.origin).then(() => {
				copied = true
				const timeout = setTimeout(() => (copied = false), 1000)
				return () => clearTimeout(timeout)
			})
		}}
	>
		{#if copied}
			Copied!
		{:else}
			Copy link
		{/if}
	</button>
{:else}
	Loading...
{/if}
