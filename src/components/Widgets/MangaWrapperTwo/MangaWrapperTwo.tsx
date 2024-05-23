import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { trans1000, trans500, truncate } from "../../../utilities/misc"
// import { DescriptionWrapper } from "../DescriptionWrapper/DescriptionWrapper"
import { Poster } from "../Poster/Poster"
import { Ticks } from "../Ticks/Ticks"

export const MangaWrapperTwo = ({ item }: { item: Manga }) => {
	const { title, image_url, slug, chapter, author, update, views, description, score } = item
	const posterProps = {
		image_url,
		title,
		imageStyles: "rounded-md",
		wrapperStyles: "",
	}
	const { name: chapName, slug: chapSlug } = chapter
	const ticks = [ author, update, views, score ]
	const truncatedTitle = truncate(title, 60)
	const truncatedDescription = truncate(description, 120)

	return (
		<div className="manga-item manga-item-2">
			<div className="inner-con flex gap-2 bg-zinc-800 rounded-md border border-zinc-600">
				<div className="left-side-con">
					<a href={`read/${slug}`} className="poster-manga-link">
						<Poster {...posterProps} />
					</a>
				</div>
				<div className="right-side-con flex flex-col gap-2 pt-5 pb-2">
					<span className="title-con">
						<a href={`read/${slug}`} className={ `title text-sm hover:text-red-500 ${trans500}` } title={title} >
							{truncatedTitle}
						</a>
					</span>
					<span className="description-con">
						<p className="description text-xs text-zinc-500" title={description} >
							{truncatedDescription}
						</p>
					</span>
					<div className="chapter-con">
						<a href={chapSlug} className={ `chapter-link text-xs bg-zinc-900 rounded-full px-3 py-1 text-wrap hover:bg-red-900 ${trans1000}`} title={chapName}>
							{truncate(chapName, 30)}
						</a>
					</div>
					<div className="ticks flex gap-2 items-center relative mt-2">
						<Ticks ticks={ticks} />
					</div>
				</div>
			</div>
			{/*<DescriptionWrapper description={description} slug={slug}/>*/}
		</div>
	) 
}

