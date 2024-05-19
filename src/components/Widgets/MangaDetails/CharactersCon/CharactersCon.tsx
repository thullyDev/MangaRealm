import type { character } from "../../../../services/Manganato/manganatoTypes"

export const CharactersCon = ({ characters, title }: { characters: character[], title: string }) => {
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
						characters.map(({ name, picture, role }, index) => {
							return (
								<li key={index} className="character-item" title={name} >
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
