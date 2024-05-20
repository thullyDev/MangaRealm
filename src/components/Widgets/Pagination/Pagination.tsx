import type { Pagination as pagi } from "../../../services/Manganato/manganatoTypes"

export const Pagination = ({ pagination, query }: { pagination: pagi, query: string }) => {
	const { pages, page } = pagination
	const pageEles: JSX.Element[] = []

	for (let i = 1; i < parseInt(pages); i++) {
		const highlight = parseInt(page) == i ? "page-highlight" : ""
		const pageEle = (
			<a href={ `${query}$page=${i}`} className={"page-link" + highlight}>{i}</a>
		)
		pageEles.push(pageEle)

		if (i > 6) break
	}
	pageEles.push(
		<a href={ `${query}$page=${pages}`} className="page-link">{pages}</a>
		)
	return (
		<div className="pagination-con">
			<ul>
				{pageEles.map((item) => {
					return (
						<li className="page-item">
							{item}
						</li>
					)
				})}
			</ul>
		</div>
	) 
}


