import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { trans1000 } from "../../../utilities/misc"
import { DescriptionWrapper } from "../DescriptionWrapper/DescriptionWrapper"
import { Poster } from "../Poster/Poster"

export const MangaWrapperOne = ({ item }: { item: Manga }) => {
	const { title, image_url, description, slug } = item
	const posterProps = {
		image_url,
		title,
		imageStyles: "rounded-t-md",
		wrapperStyles: "",
	}
	const tLen = 17
	const truncatedTitle = 
			title.length > tLen ? 
				`${title.substring(0, tLen)}...` : 
				title

	return (
		<div className="manga-item">
			<div className="inner-con border border-zinc-600 rounded-md">
				<a href={slug} className="manga-link" title={title} >
					<Poster {...posterProps} />
					<span className="title-con">
						<p className={`title text-sm bg-zinc-800 p-1 rounded-b-md text-center hover:bg-zinc-600 ${trans1000}`}>{truncatedTitle}</p>
					</span>
				</a>
			</div>
			<DescriptionWrapper description={description} slug={slug}/>
		</div>
	) 
}

