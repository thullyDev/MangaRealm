import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { MangaWrapperTwo } from "../MangaWrapperTwo/MangaWrapperTwo"

export const MangasWrapperTwo = ({ data, className }: { data: Manga[], className: string }) => {
	return (
		<div className={"mangas-con " + className}>
			{data.map((item, index) => {
					return <MangaWrapperTwo item={item}/>
				})}
		</div>
	)
}

// views
// update
// author