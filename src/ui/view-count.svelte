<script lang="ts">
	import { page } from '$app/state'

	const views = $derived(page.data.views ?? 0)
</script>

<output>{views} views</output>
