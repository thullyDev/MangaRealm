import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { MangaWrapperOne } from "../MangaWrapperOne/MangaWrapperOne"
import { MangaWrapperThree } from "../MangaWrapperThree/MangaWrapperThree"
import { MangaWrapperTwo } from "../MangaWrapperTwo/MangaWrapperTwo"

interface _MangasWrapper {
	data: Manga[], 
	className: string, 
	label: string, 
	wrapper: number,
	moreLink: string, 
}

export const MangasWrapper = ({ data, className, label, moreLink, wrapper = 1 }: _MangasWrapper) => {
	return (
		<div className={"mangas-con " + className}>
			<div className="manga-label-more-con">
				<h3 className="manga-label">{label}</h3>
				<span className="more-wrapper">
					{
						moreLink && <a href={moreLink} className="more-link">more</a>
					}
				</span>
			</div>
			<div className="inner-con">
				{data.map((item, index) => {
						if (wrapper == 1) {
							return <MangaWrapperOne key={index} item={item}/>
						}

						if (wrapper == 2) {
							return <MangaWrapperTwo key={index} item={item}/>
						}

						return <MangaWrapperThree key={index} item={item}/>
					})}
			</div>
		</div>
	)
}

