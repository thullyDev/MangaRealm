import type { Manga } from "../../../services/Manganato/manganatoTypes"
import { MangaWrapperOne } from "../MangaWrapperOne/MangaWrapperOne"

export const CompleteWrapper = ({ data }: { data: Manga[] }) => {
	return (
		<div className="mangas-con complete-con">
			{data.map((item, index) => {
					return <MangaWrapperOne item={item}/>
				})}
		</div>
	)
}

// views
// update
// author