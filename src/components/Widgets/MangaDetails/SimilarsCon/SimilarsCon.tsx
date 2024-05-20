import type { Manga } from "../../../../services/Manganato/manganatoTypes"
import { MangaWrapperThree } from "../../MangaWrapperThree/MangaWrapperThree"

export const SimilarsCon = ({ similars }: { similars: Manga[] }) => {
	return (
		<div className="similars-con">
			<div className="label-con">
				<h4 className="similars-label">
					You may also like
				</h4>
			</div>
			<div className="inner-similars-con">
				<ul className="similars-list">
					{
						similars.map((manga, index) => {
							return (
								<li key={index} className="similar-item">
									<MangaWrapperThree item={manga}/>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}
