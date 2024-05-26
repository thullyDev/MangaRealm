import type { Chapter } from "../../../services/Manganato/manganatoTypes";
import { trans500, truncate } from "../../../utilities/misc";
import { ChapterLink } from "../ChapterLink/ChapterLink";
import { Ticks } from "../Ticks/Ticks";

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

interface _ChapterMangaDetails { 
	chapterData: _chapterData 
}

export const ChapterMangaDetails = ({ chapterData }: _ChapterMangaDetails ) => {
	const { title, type, status, manga_id, chapter, chapters, nextChapter, prevChapter } = chapterData
	const { name, views, date } = chapter
	const ticks = [ type, date, views, status, JSON.stringify(chapters.length) ]
	const leftCls = {
		inner: (<>
			<i className="fas fa-arrow-left"></i> Previous
		</>),
		spanCls: "rounded-l-full bg-zinc-700 border border-zinc-500 hover:bg-zinc-600 " + trans500,
	}
	const rightCls = {
		spanCls: "rounded-r-full bg-zinc-800 border border-zinc-500 hover:bg-zinc-600 " + trans500,
		inner: (<>
			Next <i className="fas fa-arrow-right"></i>
		</>)
	}

	return (
		<div className="chpater-manga-detail-con">
			<div className="inner-con py-1 px-2 mx-1 rounded-">
				<div className="chapter-labels-con flex flex-col gap-3">
					<h3 className="chapter-name text-xl flex justify-center" title={name}>{truncate(name, 50)}</h3>
					<span className="manga-title-wrapper">
						<a href={ `/read/${manga_id}` }  title={title} className="manga-link flex justify-center text-red-500">
							<p>{title}</p>
						</a>
					</span>
				</div>
				<div className="ticks flex justify-center gap-2 items-center relative mt-2">
					<Ticks ticks={ticks} />
				</div>
				<div className="next-prev-chapter-links-con flex justify-center my-5">
					<ChapterLink chapter={prevChapter} manga_id={manga_id} label="previous" classes={leftCls}/>
					<ChapterLink chapter={nextChapter} manga_id={manga_id} label="next" classes={rightCls}/>
				</div>
			</div>
		</div>
	)
} 
