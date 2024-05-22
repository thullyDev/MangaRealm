import { formatKey } from '../../../utilities/misc';

interface _FilterOption {
  optionId: string;
  values: { value: string; name: string }[];
}

export const FilterOptions = ({ optionId, values }: _FilterOption) => {
  return (
    <div className="filters-options">
      <label htmlFor={`${optionId}-filter`} className="filters-label">
        {formatKey(optionId)}
      </label>
      <div className="inner-filters-options">
        <select
          id={`${optionId}-filter`}
          name={`${optionId}-filter`}
          data-key={optionId}
          className="filter-select scrollable">
          {values.map(({ value, name }, index) => (
            <option key={index} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

