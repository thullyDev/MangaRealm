import type { Manga } from "../../../services/Manganato/manganatoTypes";
import { FeatureItem } from "../FeatureItem/FeatureItem";
import { Slider } from "../Slider/Slider";
import "./FeaturesSliderStyle.scss"


export const FeaturesSlider = ({ data, className }: { data: Manga[]; className: string }) => {
	const slides = []
	for (let i = 0; i < data.length; i++) {
		const className = i == 1 ? "active" : ""
		const manga = data[i]
		const slide = <FeatureItem className={className} item={manga} />
		slides.push(slide)
	}
	return (
		<div className="features-slider">
			<Slider items={slides} className={className} />
		</div>
	)
}
