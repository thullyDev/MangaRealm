import { titleCase } from "../../../utilities/misc";

export interface Item {
	input: string;
	label: string;
	icon: string;
}

export const Input = ({ item, className }: { className: string, item: Item }) => {
	const { label, input, icon  } = item

	return (
		<div className="input-con">
			<div className="inner-con flex gap-5 bg-zinc-800 py-1 px-2 border border-zinc-700 rounded">
				<div className="icon-con">
					<i className={ "text-zinc-600 " + icon }></i>
				</div>
				<input className={ `${className} bg-inherit text-zinc-400 text-xs border-none outline-none w-full`} data-key={label} type={input} placeholder={titleCase(label)} />				
			</div>
		</div>
	)
}
