import type { Manga } from "../../../services/Manganato/manganatoTypes";
 import { Slider } from "../Slider/Slider";

export const FeaturesSlider = ({ data }: { data: Manga[] }) => {
	const featureElements = data.map(({ title, image_url, slug }, index) => {
				return (
					<div key={index} className="feature-item" title={title}>
						<img src={image_url} alt={title} className="feature-image"/>
						<p className="feature-title">{title}</p>
					</div>
					)
			})

	return (
		<div className="features-slider">
			<Slider items={featureElements} className="home-features"></Slider>
		</div>
	)
}

