import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { MangaWrapperOne } from "../MangaWrapperOne/MangaWrapperOne"
import { MangaWrapperTwo } from "../MangaWrapperTwo/MangaWrapperTwo"

interface MangasWrapperProps { data: Manga[], className: string, label: string, wrapper: number }

export const MangasWrapper = ({ data, className, label, wrapper = 1 }: MangasWrapperProps) => {
	return (
		<div className={"mangas-con " + className}>
			<div className="manga-label-con">
				<h3 className="manga-label">{label}</h3>
			</div>
			<div className="inner-con">
				{data.map((item, index) => {
						return ( 
							wrapper == 1 ? 
								<MangaWrapperOne key={index} item={item}/> : 
								<MangaWrapperTwo key={index} item={item}/>
						)
					})}
			</div>
		</div>
	)
}

