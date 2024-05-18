import type { MangaRead } from "../../../services/Manganato/manganatoTypes"

export const ChaptersCon = ({ manga }: { manga: MangaRead }) => {
	const { chapters, manga_id } = manga 

	return (
		<div className="chapters-con">
			<div className="chapters-amount-input-con">
				<div className="chapters-amount-con">
					{chapters.length} Chapters
				</div>
				<div className="chapter-input-con">
				     <div className="inner-con">
							<input 
								placeholder="Chapter Number" 
								type="number" 
								className="chaptrs-input"
							/>
							<button className="chapter-search-btn">
								<i className="fa fa-search"></i>
							</button>
				     </div>
				</div>
			</div>
			<div className="inner-chapters-con">
				<ul className="chapters-list">
					{
						chapters.map(({ 
							views, 
							name, 
							slug 
						}) => {
							return (
								<li className="chapter-item">
									<a 
										href={`${manga_id}${slug}`}
										title={name} 
										className="chapter-link">
											<p className="name">{name}</p>
											<span className="views">
												<i className="fas fa-eye"></i>
												{views}
											</span>
										</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}
