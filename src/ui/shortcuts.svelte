<script lang="ts">
	import { goto } from '$app/navigation'
	import { links } from '$lib/store'
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === '0') goto('/')

		links.map(({ href }, index) => {
			const key = href.split('#')[1].slice(0, 1)
			if (e.key === key || e.key === String(index + 1)) goto(href)
		})

		if (e.key === String(links.length + 1)) goto('#footer')
	}}
/>
