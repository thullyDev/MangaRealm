import type { MangaRead } from "../../../../services/Manganato/manganatoTypes"

export const MangaSideInfoCon = ({ manga }: { manga: MangaRead }) => {
	const { type, update, malData } = manga

	if (!malData) {
		return (<></>)
	}

	const { score, popularity, status, scoreStats, members, ranked, published, serialization } = malData 
	const ticks = {
			type,
			status,
			popularity,
			score,
			"score stats" : scoreStats,
			members,
			ranked,
			published,
			serialization,
		}
	const tickEles = []

	for (const [key, value] of Object.entries(ticks)) {
		const ele = (
			<div className="tick">
				<span className="tick-key text-xs capitalize">{key}: </span>
				<span className="tick-value text-sm text-zinc-400 capitalize">{value}</span>
			</div>
		) 

		tickEles.push(ele)
	}


	return (
		<div className="side-info-con my-5">
			{
				tickEles.map(element => element)
			}
		</div>
	)
}