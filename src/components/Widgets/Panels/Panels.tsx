import type { Panel as PanelProp } from "../../../services/Manganato/manganatoTypes";
import { Panel } from "../Panel/Panel";

export const Panels = ({ panels }: { panels: PanelProp[] }) => {
	return (
		<></>
	)
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
			<button className="top-btn">
				<i className="fa-solid fa-arrow-up"></i>
			</button>
		</div>
	);
};
