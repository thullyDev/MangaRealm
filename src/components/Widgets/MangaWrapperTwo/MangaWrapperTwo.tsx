import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { DescriptionWrapper } from "../DescriptionWrapper/DescriptionWrapper"

export const MangaWrapperTwo = ({ item }: { item: Manga }) => {
	const { title, image_url, description, slug, chapter, author, update, views, score } = item

	return (
		<div className="manga-item">
			<div className="inner-con">
				<div className="left-side-con">
					<a href={slug} className="poster-manga-link">
						<div className="poster-con">
							<img src={image_url} alt={title} className="poster-image"/>
						</div>
					</a>
				</div>
				<div className="right-side-con">
					<span className="title-con">
						<p className="title">
							{title}
						</p>
					</span>
					<div className="chapter-con">
						<a href={chapter.slug} className="chapter-link">
							{chapter.name}
						</a>
					</div>
					<div className="ticks">
						{
							[ author, update, views, score ].map((item, index) => {
								return (
									<span className="tick">{item}</span>
								)
							})
						}
					</div>
				</div>
			</div>
			<DescriptionWrapper description={description} slug={slug}/>
		</div>
	) 
}