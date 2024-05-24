import { filterOptions as options } from "../../../resources/filterOptions";
import { trans500 } from "../../../utilities/misc";
import { FilterOptions } from "../FilterOptions/FilterOptions";

export const MangasFilter = () => {
	const filters: JSX.Element[] = []

	for (const [key, values] of Object.entries(options)) {
		const ele = (
			<FilterOptions optionId={key} values={values}/>
		)
		
		filters.push(ele)
	}

	return (
		<>
			<div className="mangas-filter">
				<div className="inner-con flex gap-5 place-items-end px-2">
					<div className="filters flex justify-end gap-5">
						{
							filters.map(item => item)
						}
					</div>
					<div className="apply-con">
						<button type="button" className={ `apply px-2 py-1 rounded-md border border-zinc-600 bg-zinc-800 hover:bg-red-700 ${trans500}` }>
							Apply
						</button>
					</div>
				</div>
			</div>
		</>
	)
}