<script lang="ts">
	import ShowGrid from '$ui/show-grid.svelte'
</script>

<footer class="col-[bleed] grid grid-cols-subgrid border-t-[.5px] border-background/10 canvas p-lh">
	<div class="col-[content] grid grid-cols-subgrid gap-y-lh *:max-md:col-span-full">
		<p>Created by <a href="https://nuotsu.dev">nuotsu</a></p>

		<div>
			<h2>Inspiration & Credits</h2>
			<ul>
				<li>
					<a href="https://s-2k.webflow.io">S-2K</a>
				</li>
			</ul>
		</div>

		<fieldset class="">
			<legend>Controls</legend>
			<ShowGrid />
		</fieldset>

		<small class="mt-auto text-base">© 2025. All rights reserved.</small>
	</div>
</footer>
