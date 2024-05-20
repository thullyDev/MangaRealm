import type { Chapter } from "../../../services/Manganato/manganatoTypes";
import { ChapterLink } from "../ChapterLink/ChapterLink";

interface _chapterData {
	title: string;
	chapters: Chapter[];
	status: string;
	views: string;
	type: string;
	manga_id: string;
	nextChapter: Chapter;
	prevChapter: Chapter;
	chapter: Chapter;
} 

export const ChapterMangaDetails = ({ chapterData }: { chapterData: _chapterData } ) => {
	const { title, type, status, manga_id, chapter, chapters, nextChapter, prevChapter } = chapterData
	const { name, views, date } = chapter
	const ticks = [ type, date, views, status, chapters.length ]
	return (
		<div className="chpater-manga-detail-con">
			<div className="inner-con">
				<div className="chapter-labels-con">
					<h3 className="chapter-name">{name}</h3>
					<span className="manga-title-wrapper">
						<a href={ `/read/${manga_id}` }  title={title} className="manga-link">
							<p>{title}</p>
						</a>
					</span>
				</div>
				<div className="chapter-ticks-con">
					{
						ticks.map((item, index) => {
							return (
								<span key={index} className="tick">{item}</span>
							)
						})
					}
				</div>
				<div className="next-prev-chapter-links-con">
					<ChapterLink chapter={prevChapter} manga_id={manga_id} label="previous"/>
					<ChapterLink chapter={nextChapter} manga_id={manga_id} label="next"/>
				</div>
			</div>
		</div>
	)
} 
