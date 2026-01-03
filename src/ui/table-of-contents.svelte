<script lang="ts">
	import { links } from '$lib/store'
</script>

<nav class="fixed top-1/2 left-0 z-1 -translate-y-1/2 mix-blend-difference">
	<ol>
		{#each links as { href, label }, i}
			<li style:--delay="{i * 20}ms">
				<a class="flex not-hover:transition-opacity hover:opacity-100!" aria-label={label} {href}>
					<span
						class="order-last transition-[opacity,translate] delay-(--delay) before:bg-current/50"
					>
						<span>
							<kbd title={`Press "${label.slice(0, 1).toLowerCase()}" or "${i + 1}" to navigate`}
								>{label.slice(0, 1)}</kbd
							>{label.slice(1)}
						</span>
					</span>
				</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	ol {
		--subdued: 0.25;

		&:has(a:hover) a:not(:hover),
		&:global(:has(.in-intersecting) li:not(.in-intersecting) a) {
			opacity: var(--subdued);
		}

		@media (width < 48rem) {
			&:global(:has(.in-intersecting)) {
				li:not(:hover) {
					animation: clip ease-in-out calc(var(--default-transition-duration) + var(--delay))
						forwards;

					a > span {
						opacity: 0;
						translate: -1ch 0;
					}
				}

				li:hover {
					--delay: 0s !important;
				}
			}
		}
	}

	@keyframes clip {
		to {
			clip-path: inset(0 calc(100% - 1lh) 0 0);
		}
	}

	li {
		counter-increment: i;

		&:global(.in-intersecting:has(~ .in-intersecting)) a {
			opacity: var(--subdued);
		}
	}

	a::before {
		content: counter(i, upper-roman);
		text-align: center;
		width: 1lh;
	}

	a > span {
		display: flex;
		align-items: center;
		gap: 0.5ch;

		&::before {
			content: '';
			height: 0.5px;
			width: 1.5ch;
		}
	}
</style>
