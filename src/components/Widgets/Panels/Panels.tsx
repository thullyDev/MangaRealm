import type { Panel as PanelProp } from "../../../services/Manganato/manganatoTypes";
import { trans500 } from "../../../utilities/misc";
import { Panel } from "../Panel/Panel";

export const Panels = ({ panels }: { panels: PanelProp[] }) => {
	return (
		<div className="manga-panels-con">
			<ul className="manga-panels-list flex flex-col flex-wrap items-center">
				{panels.map((panel, index) => {
					const { title } = panel;
					return (
						<li
							key={index}
							className="manga-panel-item"
							title={title}
						>
							<Panel panel={panel} />
						</li>
					);
				})}
			</ul>
			<a href="#" className={ `top-btn inline-block sticky bottom-5 left-5 p-3 bg-zinc-800 hover:bg-zinc-600 ${trans500}` }>
				<i className="fa-solid fa-arrow-up"></i>
			</a>
		</div>
	);
};
