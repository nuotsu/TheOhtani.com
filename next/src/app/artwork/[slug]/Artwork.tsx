import { PortableText } from 'next-sanity'

export default function Artwork({ artwork }: { artwork: Sanity.Artwork }) {
	return (
		<section>
			<header className="richtext">
				<h1>
					<PortableText value={artwork.description} />
				</h1>
			</header>
		</section>
	)
}
