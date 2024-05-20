import type { MangaRead } from "../../../../services/Manganato/manganatoTypes"

export const MangaSideInfoCon = ({ manga }: { manga: MangaRead }) => {
	const { type, status, popularity, score, update, views, author } = manga 
	const ticks = {
			type,
			status,
			popularity,
			score,
			update,
			views,
			author
		}
	const tickEles = []

	for (const [key, value] of Object.entries(ticks)) {
		const ele = (
			<div className="tick">
				<span className="tick-key">{key}</span>
				<span className="tick-value">{value}</span>
			</div>
		) 

		tickEles.push(ele)
	}


	return (
		<div className="side-info-con">
			{
				tickEles.map(element => element)
			}
		</div>
	)
}