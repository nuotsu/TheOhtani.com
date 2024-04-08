import CategoryList from './CategoryList'
import FAQList from './FAQList'
import HeroCentered from './HeroCentered'
import HeroPostcard from './HeroPostcard'

export default function Modules({ modules }: { modules?: Sanity.Module[] }) {
	return (
		<>
			{modules?.map((module) => {
				switch (module._type) {
					case 'category-list':
						return <CategoryList {...module} key={module._key} />
					case 'faq-list':
						return <FAQList {...module} key={module._key} />
					case 'hero.centered':
						return <HeroCentered {...module} key={module._key} />
					case 'hero.postcard':
						return <HeroPostcard {...module} key={module._key} />

					default:
						return <div data-type={module._type} />
				}
			})}
		</>
	)
}
