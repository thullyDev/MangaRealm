interface SliderListProps {
  items: JSX.Element[];
  className: string;
}

export const Slider = ({ items, className }: SliderListProps) => {
	return (
		<div className={ "inner-slider-con relative " + className }>
			<div className="w-full overflow-hidden">
				{items.map((item, index) => (
					<div key={index} className="swiper-slide">{item}</div>
				))}
			</div>
			<div className="slider-btns-con absolute z-10 right-5 bottom-5 flex gap-1 flex-col">
				<button type="button" className="relative prev bg-zinc-500 p-2 rounded-lg rounded-lg hover:bg-red-700 transition duration-1000 ease-in-out cursor-pointer">
					<i className="fas fa-chevron-left prev-button"></i>
				</button>
				<button type="button" className="relative next bg-zinc-500 p-2 rounded-lg rounded-tl-lg hover:bg-red-700 transition duration-1000 ease-in-out cursor-pointer">
					<i className="fas fa-chevron-right next-button"></i>
				</button>
			</div>
		</div>
	)
}
