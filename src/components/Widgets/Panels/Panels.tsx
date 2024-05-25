import type { Panel as PanelProp } from "../../../services/Manganato/manganatoTypes";
import { Panel } from "../Panel/Panel";

export const Panels = ({ panels }: { panels: PanelProp[] }) => {
	return (
		<div className="manga-panels-con">
			<ul className="manga-panels-list">
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
		</div>
	);
};
