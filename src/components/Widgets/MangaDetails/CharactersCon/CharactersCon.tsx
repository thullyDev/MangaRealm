import type { character } from "../../../../services/Manganato/manganatoTypes"
import { truncate } from "../../../../utilities/misc"

export const CharactersCon = ({ characters, title }: { characters: character[], title: string }) => {
	return (
		<div className="characters-con mt-5">
			<div className="label-con">
				<h4 className="characters-label">
					{title} characters
				</h4>
			</div>
			<div className="inner-characters-con my-5">
				<ul className="characters-list flex gap-5 w-full overflow-auto scrollable">
					{
						characters.map(({ name, picture, role }, index) => {
							return (
								<li key={index} className="character-item" title={name} >
									<div className="inner-con flex flex-col gap-2 justify-center items-center">
										<p className="role text-zinc-400 text-sm">{role}</p>
										<img src={picture} alt={name} className="character-image rounded-full w-20 h-20 object-cover object-top border border-zinc-600"/>
										<p className="name text-nowrap text-sm" title={name}>{truncate(name, 50)}</p>
									</div>
								</li>	
							)
						})
					}
				</ul>
			</div>
		</div>
	)}
