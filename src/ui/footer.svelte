<script lang="ts">
	import Share from '$ui/share.svelte'
	import ShowGrid from '$ui/show-grid.svelte'
</script>

<footer id="footer" class="grid-system min-h-lvh p-lh">
	<p>This is The Ohtani.</p>

	<menu>
		<li><Share /></li>
		<!-- <li><button>View on Awwwards</button></li> -->
		<li><a href="https://github.com/nuotsu/theohtani.com">View on GitHub</a></li>
		<li><ShowGrid /></li>
	</menu>

	<div>
		<h2>Inspiration & Credits</h2>
		<ul>
			<li>
				<a href="https://s-2k.webflow.io">S-2K</a>
			</li>
		</ul>
	</div>

	<p>Created by <a href="https://nuotsu.dev">nuotsu</a></p>

	<small class="-col-end-1 mt-auto text-right">© 2025. All rights reserved.</small>
</footer>
