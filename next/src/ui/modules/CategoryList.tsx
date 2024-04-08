import { fetchSanity } from '@/lib/sanity'
import { PortableText, groq } from 'next-sanity'
import Link from 'next/link'

export default async function CategoryList({
	content,
}: Partial<{
	content: any
}>) {
	const categories = await fetchSanity<Sanity.Category[]>(
		groq`*[_type == 'category']|order(metadata.title asc){
			...,
			'count': count(*[_type == 'artwork' && references(^._id)])
		}`,
		{ tags: ['category-list'] },
	)

	return (
		<section className="section">
			<header className="richtext">
				<PortableText value={content} />
			</header>

			<ul>
				{categories.map(({ metadata, count }, key) => (
					<li key={key}>
						<Link href={`/category/${metadata.slug.current}`}>
							{metadata.title}
							<span>({count})</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
