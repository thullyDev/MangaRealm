import type { MangaRead } from "../../../../services/Manganato/manganatoTypes"
import { trans500 } from "../../../../utilities/misc"

export const MangaSideInfoCon = ({ manga }: { manga: MangaRead }) => {
	const { type, malData, genres } = manga

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
			genres
		}
	const tickEles = []

	for (const [key, raw] of Object.entries(ticks)) {
		const value = (typeof raw == "object") ? (raw.map(({ name, slug }) => {
			return (
				<a href={`/filters?genres=${slug}`} className={`text-red-400 hover:text-zinc-600 underline ${trans500}`}>
					{name}
				</a>
			)
		})) : raw
		const ele = (
			<div className="tick flex flex-wrap gap-1 items-center">
				<span className="tick-key text-xs capitalize">{key}: </span>
				<span className="tick-value text-sm text-zinc-400 capitalize flex gap-1 flex-wrap">{value}</span>
			</div>
		) 

		tickEles.push(ele)
	}


	return (
		<div className="side-info-con my-5">
			{
				tickEles.map(element => element)
			}
			<span className="disclaimer">
				<p className="text-sm text-zinc-500 mt-5">According to MyAnimeList</p>
			</span>
		</div>
	)
}