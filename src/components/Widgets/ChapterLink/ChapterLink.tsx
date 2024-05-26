import type { Chapter } from "../../../services/Manganato/manganatoTypes";

interface _ChapterLink { 
	manga_id: string; 
	label: string; 
	chapter: Chapter 
	classes: {
		spanCls: string;
		inner: JSX.Element;
	}
}

export const ChapterLink = ({ chapter, manga_id, label, classes }: _ChapterLink) => {
	const { slug, name } = chapter
	const { spanCls, inner } = classes
	return (
		<span className={`chapter-link-wrapper w-40 py-2 px-3 ${spanCls}`} title={name}>
			<a href={`/read/${manga_id}/${!slug ? "" : slug}`} className={ `chapter-link w-full h-full flex justify-center gap-5 items-center`}>
				{inner}
			</a>
		</span>
	)
}
