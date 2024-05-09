import { getFeatures } from "../../../services/Manganato/manganato"

export const FeaturesSlider = async () => {
	const data = await getFeatures()
	// console.log
	return (
		<div className="features-slider"></div>
	)
}
