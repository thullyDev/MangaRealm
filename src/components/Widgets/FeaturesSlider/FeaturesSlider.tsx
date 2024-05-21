import type { Manga } from "../../../services/Manganato/manganatoTypes";
 import { Slider } from "../Slider/Slider";
 import "./FeaturesSliderStyle.scss"

export const FeaturesSlider = ({ data } : { data: Manga[] }) => {
	const featureElements = data.map(({ 
			title, 
			image_url, 
			slug, 
			status, 
			synopsis, 
			author, 
			views, 
			update, 
			type, 
			score 
	}, index) => {
				return (
					<div key={index} className="feature-item my-1" title={title}>
						<div className="inner-con bg-gray-800 px-2 py-2 mx-2 rounded flex">
							<div className="left-side-con">
								<div className="inner-con">
									<div className="status text-xs text-gray-500">
										{status}
									</div>
									<div className="title">
										{title}
									</div>	
									<div className="synopsis">
										{synopsis}
									</div>	
									<div className="ticks">
										{
											[ type, author, update, views, score ].map((item, index) => {
												return (
													<span key={index} className="tick">{item}</span>
												)
											})
										}
									</div>	
									<div className="read-link-con">
										<a href={slug} className="read-link">Read Now</a>
									</div>								
								</div>
							</div>
							<div className="right-side-con">
								<div className="inner-con">
									<img src={image_url} alt={title} className="feature-image"/>
								</div>
							</div>
						</div>
					</div>
					)
			})

	return (
		<div className="features-slider">
			<Slider items={featureElements} className="home-features"></Slider>
		</div>
	)
}

