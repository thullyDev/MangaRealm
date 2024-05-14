import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { MangaWrapperOne } from "../MangaWrapperOne/MangaWrapperOne"

export const MangasWrapperOne = ({ data, className }: { data: Manga[], className: string }) => {
	return (
		<div className={"mangas-con " + className}>
			{data.map((item, index) => {
					return <MangaWrapperOne item={item}/>
				})}
		</div>
	)
}

// views
// update
// author