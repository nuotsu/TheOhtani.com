import Link from 'next/link'

export default function Category({ category }: { category: Sanity.Category }) {
	return (
		<section>
			<header className="richtext">
				<h1>{category.metadata.title}</h1>
			</header>

			<ul>
				{category.items?.map((item, key) => (
					<li key={key}>
						<Link href={`/artwork/${item.slug.current}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
