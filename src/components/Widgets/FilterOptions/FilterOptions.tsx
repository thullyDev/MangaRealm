import { formatKey, trans500 } from '../../../utilities/misc';

interface Values { 
  value: string; 
  name: string 
}

interface _FilterOption {
  optionId: string;
  values: Values[];
}

export const FilterOptions = ({ optionId, values }: _FilterOption) => {
  return (
    <div className="filters-options flex gap-2 flex-col">
      <label htmlFor={`${optionId}-filter`} className="filters-label text-sm">
        {formatKey(optionId)}
      </label>
      <div className="inner-filters-options">
        <select
          id={`${optionId}-filter`}
          name={`${optionId}-filter`}
          data-key={optionId}
          className={`filter-select scrollable text-sm bg-zinc-800 hover:bg-zinc-600 hover:border-zinc-800 ${trans500}  rounded-md px-2 py-1 outline-none border border-zinc-600`}>
          {values.map(({ value, name }, index) => (
            <option key={index} value={value} className={ `text-sm hover:border-zinc-800 ${trans500}` }> 
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

