import type { Manga } from "../../../services/Manganato/manganatoTypes"

export const MangaWrapperOne = ({ item }: { item: Manga }) => {
	const { title, image_url, slug } = item

	return (
		<div className="manga-item">
			<div className="inner-con">
				<a href={slug} className="manga-link">
					<span className="poster-con">
						<img src={image_url} alt="" className="poster"/>
					</span>
					<span className="title-con">
						<p className="title">{title}</p>
					</span>
				</a>
			</div>
		</div>
	) 
}