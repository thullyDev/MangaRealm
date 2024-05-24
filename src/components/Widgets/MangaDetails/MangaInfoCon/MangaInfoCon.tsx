import type { MangaRead } from "../../../../services/Manganato/manganatoTypes"

interface socialsType {
	icon: JSX.Element;
	link: string;
}

export const MangaInfoCon = ({ manga }: { manga: MangaRead }) => {
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
					<div className="inner-poster-btns-con">
						<div className="inner-con">
							<img src={image} alt={title} title={title} className="poster" />
						</div>
						<div className="actions-btns-con">
						    <button type="button" className="bookmark-btn">
						    	<i className="fa-regular fa-bookmark"></i>
						    	{/*<i className="fa-solid fa-bookmark"></i>*/}
						    </button>
							<button type="button" className="share-btn">
								<i className="fa-solid fa-share"></i>
							</button>
						</div>	
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
							genres.map(({name, slug}, index) => {
								return (
									<a key={index} href={slug} className="genre-link">
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