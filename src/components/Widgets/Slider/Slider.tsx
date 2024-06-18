import { trans1000 } from "../../../utilities/misc";

interface SliderListProps {
  items: JSX.Element[];
  className: string;
}

export const Slider = ({ items, className }: SliderListProps) => {
  return (
    <div id="home-swiper" className={"inner-slider-con relative swiper " + className}>
      <div className="w-full flex swiper-wrapper">
        {items.map((item, index) => (
          <div key={index} className="swiper-slide w-full h-full">
            {item}
          </div>
        ))}
      </div>
      <div className="slider-btns-con absolute z-10 right-5 bottom-5 flex gap-1 flex-col">
        <button
          type="button"
          className={`relative slider-prev bg-zinc-500 p-2 rounded-lg hover:bg-red-700 ${trans1000} cursor-pointer`}
        >
          <i className="fas fa-chevron-left prev-button"></i>
        </button>
        <button
          type="button"
          className={`relative slider-next bg-zinc-500 p-2 rounded-lg rounded-tl-lg hover:bg-red-700 ${trans1000} cursor-pointer`}
        >
          <i className="fas fa-chevron-right next-button"></i>
        </button>
      </div>
    </div>
  );
};
