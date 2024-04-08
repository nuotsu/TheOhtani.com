import { fetchSanity, groq } from "@/lib/sanity";
import Artwork from "../next/src/app/(artwork)/[...slug]/Artwork";
import { notFound } from "next/navigation";
import processMetadata from "@/lib/processMetadata";

export default async function ({ params }: Props) {
  const artwork = await getArtwork({ params });
  if (!artwork) notFound();
  return <Artwork artwork={artwork} />;
}

export async function generateMetadata({ params }: Props) {
  const artwork = await getArtwork({ params });
  if (!artwork) notFound();
  return processMetadata({
    metadata: {
      title: artwork.title,
      description: artwork.title,
      slug: artwork.slug,
    },
  });
}

async function getArtwork({ params }: Props) {
  return await fetchSanity<Sanity.Artwork>(
    groq`*[
			_type == 'artwork' &&
			slug.current == $artwork &&
			category->metadata.slug.current == $category
		][0]{
			...,
			'title': pt::text(description),
			category->
		}`,
    {
      params: {
        category: params.slug[0],
        artwork: params.slug[1],
      },
      tags: ["pages"],
    }
  );
}

type Props = {
  params: {
    slug: string[];
  };
};
