export const ChapterLink = ({ chapter, manga_id, label }: { manga_id: string; label: string; chapter: Chapter }) => {
	const { slug, name } = chapter
	return (
		<span className="chapter-link-wrapper">
			<a href={`/read/${manga_id}/${slug}`} title={name} className="chapter-link">{label}</a>
		</span>
	)
}
