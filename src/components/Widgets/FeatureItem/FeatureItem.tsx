import type { Manga } from "../../../services/Manganato/manganatoTypes"

export const FeatureItem = ({ item, className }: { item: Manga, className: string }) => {
	const { 
			title, 
			image_url, 
			slug, 
			status, 
			synopsis, 
			chapter, 
			views, 
			update, 
			type, 
			score 
	} = item
	const { name, slug: chapSlug } = chapter
	const ticks = [ type, update, views, score ]
	const tickEles = []

	for (let i = 0; i < ticks.length; i++) {
		const tick = ticks[i]
		const item = ( 
			<>	
				<span className="tick dot w-1 h-1 bg-gray-500 rounded-full"></span>
				<span className="tick text-xs text-gray-500">{tick}</span>
			</>
		)
		tickEles.push(item)
	}

	return (
			<div className={`feature-item my-1 ${className}`} title={title}>
				<div className="inner-con h-48 bg-zinc-800 border border-zinc-600 mx-2 rounded flex justify-between">
					<div className="left-side-con pl-6 py-5">
						<div className="inner-con flex flex-col gap-2 relative">
							<div className="status text-xs text-gray-500">
								{status}
							</div>
							<div className="title">
								{title}
							</div>
							<div className="chapter">
								<a href={`/read/${slug}/${chapSlug}`} className="chapter-link text-xs text-gray-400 hover:text-red-400 transition duration-1000 ease-in-out">
									{name}
								</a>
							</div>		
							<div className="synopsis">
								{synopsis}
							</div>	
							<div className="ticks flex gap-2 items-center relative mt-2">
								{
									tickEles.map((tick) => tick)
								}
							</div>	
							<div className="read-link-con flex justify-center">
								<a href={`/read/${slug}`} className="read-link text-sm transition bg-red-700 hover:bg-red-500 mt-2 px-2 py-1 rounded-xl ease-in-out duration-1000">Read Now</a>
							</div>								
						</div>
					</div>
					<div className="right-side-con h-full">
						<div className="inner-con h-full rounded-r overflow-hidden">
							<img src={image_url} alt={title} className="feature-image relative left-5 bottom-2 rotate-12 h-56"/>
						</div>
					</div>
				</div>
			</div>
	)

}
