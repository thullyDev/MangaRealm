import type { Manga, MangaRead } from "../../../services/Manganato/manganatoTypes"
import { ChaptersCon } from "./ChaptersCon/ChaptersCon";
import { CharactersCon } from "./CharactersCon/CharactersCon";
import { MangaInfoCon } from "./MangaInfoCon/MangaInfoCon";
import { MangaSideInfoCon } from "./MangaSideInfoCon/MangaSideInfoCon";
import { SimilarsCon } from "./SimilarsCon/SimilarsCon";

interface MangaDetailsProps { 
	manga: MangaRead | null;
	similars: Manga[]; 
}

export const MangaDetails = ({ manga, similars } : MangaDetailsProps ) => {
	if (!manga) {
		return (
			<div className="manga-details-con">
				<div className="not-found-con">
					<img src="/not-found-image.gif" alt="Manga not found" className="not-found-img"/>
					<p className="not-found-text">Manga not found</p>
				</div>
			</div>
		)
	}
	const { title, malData } = manga
	return (
		<div className="manga-details-con">
			<div className="manga-outer-info-con">
				<MangaInfoCon manga={manga} />
				<MangaSideInfoCon manga={manga} />
			</div>
			<div className="manga-chapters-similars-con">
				<ChaptersCon manga={manga}/>
				<SimilarsCon similars={similars}/>
			</div>
			{
				 malData && 
				 malData.characters && 
				 <CharactersCon title={title} characters={malData.characters} />
			}
		</div>
	)
}

