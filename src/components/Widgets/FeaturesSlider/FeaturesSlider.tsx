import { getSettings } from "../../../services/MangaRealm.api/admin/handlers";
import type { Manga } from "../../../services/Manganato/manganatoTypes";
import { FeatureItem } from "../FeatureItem/FeatureItem";
import { Slider } from "../Slider/Slider";
import "./FeaturesSliderStyle.scss";

const settings = await getSettings()
const enableSlider = settings.features.value

export const FeaturesSlider = ({ data, className }: { data: Manga[]; className: string }) => {
  if (enableSlider == false) {
    return (
      <></>
    )
  }
  const slides = [];
  for (let i = 0; i < data.length; i++) {
    // const className = i == 1 ? "active" : ""
    const manga = data[i];
    const slide = <FeatureItem className="" item={manga} />;
    slides.push(slide);
  }
  return (
    <div className="features-slider">
      <Slider items={slides} className={className} />
    </div>
  );
};
