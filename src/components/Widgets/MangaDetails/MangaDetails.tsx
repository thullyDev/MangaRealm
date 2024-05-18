import type { Manga, MangaRead, character } from "../../../services/Manganato/manganatoTypes"
import { MangaWrapperThree } from "../MangaWrapperThree/MangaWrapperThree";

interface socialsType {
	icon: JSX.Element;
	link: string;
}


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


const MangaInfoCon = ({ manga }: { manga: MangaRead }) => {
	const { title, image, description, altNames, genres, chapters, manga_id, status } = manga 
	const readlink = chapters ? `/read/${manga_id}/${chapters[0].slug}` : `/read/${manga_id}/`
	const socials: socialsType[] = [ // TODO: make them match their respective links
	  {
	    icon: <i className="fab fa-instagram"></i>,
	    link: "https://www.instagram.com/",
	  },
	  {
	    icon: <i className="fab fa-reddit"></i>,
	    link: "https://www.reddit.com/",
	  },
	  {
	    icon: <i className="fab fa-facebook"></i>,
	    link: "https://www.facebook.com/",
	  },
	  {
	    icon: <i className="fab fa-discord"></i>,
	    link: "https://discord.com/",
	  },
	];

	return (

			<div className="image-info-con">
				<div className="poster-side">
					<div className="inner-poster-con">
						<img src={image} alt={title} title={title} className="poster" />
					</div>
					<span className="status-con">
						<p className="status">{status}</p>
					</span>
				</div>
				<div className="manga-info-con">
					<div className="names-con">
						<h3 className="title" title={title}>{title}</h3>
						<span className="alt-names">
							<p>{altNames}</p>
						</span>
					</div>
					<div className="manga-acts-con">
						<a href={readlink} className="read-link">
							Read Now
						</a> 
					</div>
					<div className="genres-con">
						{
							genres.map(({name, slug}) => {
								return (
									<a href={slug} className="genre-link">
										{name}
									</a>
								)
							})
						}
					</div>
					<div className="description-con">
						<span className="description truncated-description">
							<p>{description}</p>
							<button className="expand-btn">
								more
							</button>
						</span>
						<div className="description-modal-con">
							<button className="close-btn">
								<i className="fa-solid fa-x"></i>
							</button>
							<span className="description">
								<p>{description}</p>
							</span>
						</div>
					</div>
					<div className="socials-con">
						{socials.map(({ icon, link}) => {
							return (
								<a href={link} className="social-link">
									{icon}
								</a>
							)
						})}
					</div>
				</div>
			</div>
	)
}

const MangaSideInfoCon = ({ manga }: { manga: MangaRead }) => {
	const { type, status, popularity, score, update, views, author } = manga 
	const ticks = {
			type,
			status,
			popularity,
			score,
			update,
			views,
			author
		}
	const tickEles = []

	for (const [key, value] of Object.entries(ticks)) {
		const ele = (
			<div className="tick">
				<span className="tick-key">{key}</span>
				<span className="tick-value">{value}</span>
			</div>
		) 

		tickEles.push(ele)
	}


	return (
		<div className="side-info-con">
			{
				tickEles.map(element => element)
			}
		</div>
	)
}


const ChaptersCon = ({ manga }: { manga: MangaRead }) => {
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


const SimilarsCon = ({ similars }: { similars: Manga[] }) => {
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
						similars.map((manga) => {
							return (
								<li className="similar-item">
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


const CharactersCon = ({ characters, title }: { characters: character[], title: string }) => {
	return (
		<div className="characters-con">
			<div className="label-con">
				<h4 className="characters-label">
					{title} characters
				</h4>
			</div>
			<div className="inner-characters-con">
				<ul className="characters-list">
					{
						characters.map(({ name, picture, role }) => {
							return (
								<li className="character-item" title={name} >
									<div className="inner-con">
										<p className="name">{name}</p>
										<img src={picture} alt={name} className="character-image"/>
										<p className="role">{role}</p>
									</div>
								</li>	
							)
						})
					}
				</ul>
			</div>
		</div>
	)}

