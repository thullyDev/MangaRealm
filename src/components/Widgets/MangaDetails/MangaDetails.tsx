import type {
	Manga,
	MangaRead,
} from "../../../services/Manganato/manganatoTypes";
import { ChaptersCon } from "./ChaptersCon/ChaptersCon";
import { CharactersCon } from "./CharactersCon/CharactersCon";
import { MangaInfoCon } from "./MangaInfoCon/MangaInfoCon";
import { MangaSideInfoCon } from "./MangaSideInfoCon/MangaSideInfoCon";
import { SimilarsCon } from "./SimilarsCon/SimilarsCon";
import '../../../styles/pages/mangaRead.scss';

interface MangaDetailsProps {
	manga: MangaRead;
	similars: Manga[];
}

export const MangaDetails = ({ manga, similars }: MangaDetailsProps) => {
	const { title, malData } = manga;

	return (
		<div className="manga-details-con px-3">
			<div className="manga-outer-info-con">
				<MangaInfoCon manga={manga} />
				<MangaSideInfoCon manga={manga} />
			</div>
			<div className="manga-chapters-similars-con">
				<ChaptersCon manga={manga} />
				<SimilarsCon similars={similars} />
			</div>
			{malData && malData.characters && (
				<CharactersCon title={title} characters={malData.characters} />
			)}
		</div>
	);
};
