import type { MangaRead } from "../../../../services/Manganato/manganatoTypes";
import { trans1000, trans500, truncate } from "../../../../utilities/misc";

interface socialsType {
	icon: JSX.Element;
	link: string;
	color: string;
	name: string;
}

export const MangaInfoCon = ({ manga }: { manga: MangaRead }) => {
	const {
		title,
		image,
		description,
		alt_names,
		genres,
		chapters,
		manga_id,
		status,
	} = manga;
	const readlink = chapters
		? `/read/${manga_id}/${chapters[0].slug}`
		: `/read/${manga_id}/`;
	const socials: socialsType[] = [
		// TODO: make them match their respective links
		{	
			name: "Instagram",
			color: "bg-violet-600",
			icon: <i className={ `fab fa-instagram text-sm hover:text-zinc-400 ${trans500}`}></i>,
			link: "https://www.instagram.com/",
		},
		{	
			name: "Reddit",
			color: "bg-orange-600",
			icon: <i className={ `fab fa-reddit text-sm hover:text-zinc-400 ${trans500}`}></i>,
			link: "https://www.reddit.com/",
		},
		{	
			name: "Facebook",
			color: "bg-sky-800",
			icon: <i className={ `fab fa-facebook text-sm hover:text-zinc-400 ${trans500}`}></i>,
			link: "https://www.facebook.com/",
		},
		{	
			name: "Discord",
			color: "bg-purple-600",
			icon: <i className={ `fab fa-discord text-sm hover:text-zinc-400 ${trans500}`}></i>,
			link: "https://discord.com/",
		},
	];

	return (
		<div className="image-info-con">
			<div className="poster-side">
				<div className="inner-poster-btns-con flex flex-col justify-center">
					<div className="inner-image-con h-60 flex justify-center">
						<img
							src={image}
							alt={title}
							title={title}
							className="poster h-full border border-zinc-500 rounded-md"
						/>
					</div>
					<div className="actions-btns-con flex justify-center mt-2">
						<button type="button" className={ `bookmark-btn border border-zinc-500 w-20 py-1 bg-zinc-700 hover:bg-zinc-400 rounded-l-full ${trans500}`}>
							<i className="fa-regular fa-bookmark"></i>
							{/*<i className="fa-solid fa-bookmark"></i>*/}
						</button>
						<button type="button" className={ `bookmark-btn border border-zinc-500 w-20 py-1 bg-zinc-800 hover:bg-zinc-400 rounded-r-full ${trans500}`}>
							<i className="fa-solid fa-share"></i>
						</button>
					</div>
				</div>
			</div>
			<div className="manga-info-con">
				<div className="status-names-con flex gap-1 flex-col my-2">
					<span className="status-con">
						<p className="status text-xs text-zinc-400">{status}</p>
					</span>
					<h3 className="title text-2xl" title={title}>
						{title}
					</h3>
					<span className="alt-names">
						<p className="text-red-300 text-xs my-2">{alt_names}</p>
					</span>
				</div>
				<div className="manga-acts-con flex justify-center my-2">
					<a href={readlink} className="read-link bg-red-600 py-1 px-2 rounded-md">
						Read Now
					</a>
				</div>
{/*				<div className="genres-con flex flex-wrap gap-2 justify-around my-3">
					{genres.map(({ name, slug }, index) => {
						return (
							<a key={index} href={slug} className={`genre-link border border-zinc-500 bg-zinc-700 w-32 py-1 flex justify-center text-xs rounded-md hover:bg-zinc-400 ${trans500}`}>
								{name}
							</a>
						);
					})}
				</div>
*/}				<div className="description-con mb-5">
					<span className="description truncated-description flex">
						<p className="text-zinc-300 text-sm">
							{truncate(description, 250)} 
							<button className={ `expand-btn text-xs text-zinc-300 ml-1 hover:text-red-500 ${trans500}`}>more</button> 
						</p>
					</span>
					<div className="description-modal-con">
						<div className="inner-con border bg-zinc-700">
							<button className="close-btn">
								<i className="fa-solid fa-x"></i>
							</button>
							<span className="description">
								<p>{description}</p>
							</span>
						</div>
					</div>
				</div>
				<div className="socials-con flex gap-1 justify-center flex-wrap">
					{socials.map(({ icon, link, name, color }) => {
						return (
							<a href={link} className= { `social-link w-28 items-center gap-3 text-sm flex justify-center rounded-md ${color} hover:bg-zinc-700 ${trans500} py-1 px-2` }>
								{icon} {name}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};
