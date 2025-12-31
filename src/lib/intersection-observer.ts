import type { Attachment } from 'svelte/attachments'

export function intersectionObserver(
	callback: (entry: IntersectionObserverEntry) => void = () => {},
	options: IntersectionObserverInit = {},
): Attachment {
	return (element) => {
		let observer: IntersectionObserver | null = null

		observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				callback(entry)
			}
		}, options)

		observer.observe(element)

		return () => {
			observer.disconnect()
		}
	}
}

export const activateTableOfContents = [
	(entry: IntersectionObserverEntry) => {
		const { id } = entry.target
		const tocItem = document.querySelector(`nav a[href="#${id}"]`)?.closest('li')

		if (entry.isIntersecting) {
			tocItem?.classList.add('in-view')
		} else {
			tocItem?.classList.remove('in-view')
		}
	},
	{ rootMargin: '0px 0px -48px 0px' },
] as const
