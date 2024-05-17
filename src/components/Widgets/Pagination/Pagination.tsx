import type { Manga, Pagination as pagi } from "../../../services/Manganato/manganatoTypes"

export const Pagination = ({ pagination }: { pagination: pagi }) => {
	const { pages, page } = pagination

	return (
		<div className="pagination-con"></div>
	) 
}


