import type { MangaRead } from "../../../services/Manganato/manganatoTypes"

interface socialsType {
	icon: JSX.Element;
	link: string;
}

export const MangaDetails = ({ manga } : { manga: MangaRead | null }) => {
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
	const { title, image, description, altNames, genres, chapters, slug  } = manga 
	const readlink = chapters ? `/read/${slug}/${chapters[0].slug}` : `/read/${slug}/`


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
		<div className="manga-details-con">
			<div className="image-info-con">
				<div className="poster-side">
					<img src={image} alt={title} title={title} className="poster" />
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
		</div>
	)
}

