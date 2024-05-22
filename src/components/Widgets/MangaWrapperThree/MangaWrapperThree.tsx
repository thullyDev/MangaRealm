import type { Manga } from "../../../services/Manganato/manganatoTypes"
// import { DescriptionWrapper } from "../DescriptionWrapper/DescriptionWrapper"

export const MangaWrapperThree = ({ item }: { item: Manga }) => {
	const { title, image_url, description, slug, views, update } = item

	return (
		<div className="manga-item">
			<div className="inner-con">
				<a href={slug} className="manga-link">
					<span className="poster-con">
						<img src={image_url} alt={title} className="poster"/>
					</span>
					<span className="title-update-views-chapters-con">
						<p className="title">{title}</p>
						<span className="update-views-con">
							<span className="update">{update}</span>
							<span className="views">{views}</span>
						</span>
					</span>
				</a>
			</div>
			{/*<DescriptionWrapper description={description} slug={slug}/>*/}
		</div>
	) 
}


