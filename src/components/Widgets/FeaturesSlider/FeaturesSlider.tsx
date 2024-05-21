import type { Manga } from "../../../services/Manganato/manganatoTypes";
import { FeatureItem } from "../FeatureItem/FeatureItem";
import { Slider } from "../Slider/Slider";
// import "./FeaturesSliderStyle.scss"


export const FeaturesSlider = ({ data, className }: { data: Manga[]; className: string }) => {
	return (
		<div className="features-slider">
			<Slider items={data.map((manga: Manga) => <FeatureItem item={manga} />)} className={className} />
		</div>
	)
}
