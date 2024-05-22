import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { trans1000 } from "../../../utilities/misc"
import { MangaWrapperOne } from "../MangaWrapperOne/MangaWrapperOne"
import { MangaWrapperThree } from "../MangaWrapperThree/MangaWrapperThree"
import { MangaWrapperTwo } from "../MangaWrapperTwo/MangaWrapperTwo"
import "./MangasWrapperStyles.scss"

interface _MangasWrapper {
	data: Manga[], 
	className: string, 
	label: string, 
	wrapper: number,
	moreLink: string, 
}

export const MangasWrapper = ({ data, className, label, moreLink, wrapper = 1 }: _MangasWrapper) => {
	return (
		<div className={"mangas-con mt-5 " + className}>
			<div className="inner-con px-2">
				<div className="manga-label-more-con flex justify-between mb-2 items-end">
					<h3 className="manga-label text-xl">{label}</h3>
					<span className="more-wrapper">
						{
							moreLink && <a href={moreLink} className={`more-link text-sm hover:text-red-700 ${trans1000}`}>more</a>
						}
					</span>
				</div>
				<div className="inner-con">
					<ul className="mangas-list">
					{
						data.map((item, index) => {
							let mangaWrapper = null

							if (wrapper == 1) {
								mangaWrapper = <MangaWrapperOne key={index} item={item}/>
							}

							if (wrapper == 2) {
								mangaWrapper = <MangaWrapperTwo key={index} item={item}/>
							}

							if (wrapper == 3) {
								mangaWrapper = (<MangaWrapperThree key={index} item={item}/>)
							}

							return (
								<li className="manga-list-item">
									{mangaWrapper}
								</li>
							)
						})
					}
					</ul>
				</div>
			</div>
		</div>
	)
}

