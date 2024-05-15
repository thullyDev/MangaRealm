import type { Manga } from "../../../services/Manganato/manganatoTypes";
 import { Slider } from "../Slider/Slider";

export const FeaturesSlider = (props: { data: Manga[] }) => {
	console.log(props)
	const { data } = props
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
					<div key={index} className="feature-item" title={title}>
						<div className="inner-con">
							<div className="left-side-con">
								<div className="inner-con">
									<div className="status">
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
											[ type, author, update, views, score ].map((item) => {
												return (
													<span className="tick">{item}</span>
												)
											})
										}
									</div>	
									<div className="read-link-con">
										<a href={slug} className="read-link">Read</a>
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

