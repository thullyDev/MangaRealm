interface SliderListProps {
  items: JSX.Element[];
  className: string;
}

export const Slider = ({ items, className }: SliderListProps) => {
	return (
		<div className={ "inner-slider-con " + className }>
			<div className="swiper-wrapper">
				{items.map((item, index) => (
					<div key={index} className="swiper-slide slider-item">{item}</div>
				))}
			</div>
			<div className="prev">
				<i className="fas fa-chevron-left prev-button"></i>
			</div>
			<div className="next">
				<i className="fas fa-chevron-right next-button"></i>
			</div>
		</div>
	)
}
// <div class="large-swiper">
// 	<div class="swiper-wrapper">
// 		<div class="swiper-slide"><div class="swiper-slide-inside">Slide 1</div></div>
// 		<div class="swiper-slide"><div class="swiper-slide-inside">Slide 2</div></div>
// 	</div>
// <div class="prev"></div>
// 	<div class="next"></div>
// </div>