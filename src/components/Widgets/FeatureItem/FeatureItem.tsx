import type { Manga } from "../../../services/Manganato/manganatoTypes"

export const FeatureItem = ({ item }: { item: Manga }) => {
	const { 
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
	} = item
	return (
			<div className="feature-item my-1" title={title}>
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
											<span key={index} className="tick text-xs text-gray-00">{item}</span>
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
						<div className="inner-con h-40">
							<img src={image_url} alt={title} className="feature-image h-full object-cover"/>
						</div>
					</div>
				</div>
			</div>
	)

}
