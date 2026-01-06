<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'

	let {
		button,
		buttonProps,
		children,
	}: {
		button: Snippet
		buttonProps: HTMLAttributes<HTMLButtonElement>
		children: Snippet
	} = $props()

	let dialog: HTMLDialogElement | null = $state(null)
</script>

<button onclick={() => dialog?.showModal()} {...buttonProps}>
	{@render button()}
</button>

<dialog
	class="[--duration:.6s] backdrop:backdrop-blur"
	closedby="any"
	onclick={(e) => {
		if (!('closedby' in e) && e.target === e.currentTarget) e.currentTarget?.close()
	}}
	bind:this={dialog}
>
	{@render children()}
</dialog>

<style>
	:global(body):has(dialog:is(:open, [open])) {
		overflow: hidden;
	}

	dialog,
	dialog::backdrop {
		opacity: 0;
		transition: var(--duration, var(--default-transition-duration)) ease-in-out allow-discrete
			allow-discrete;

		/* target chrome only */
		@supports (overlay: auto) {
			transition-property: opacity, overlay, display;
		}
	}

	dialog {
		&:is(:open, [open]),
		&:is(:open, [open])::backdrop {
			opacity: 1;
			transition-property: opacity, overlay, display;

			@starting-style {
				opacity: 0;
			}
		}
	}
</style>
