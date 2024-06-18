import { filterOptions as options } from "../../../resources/filterOptions";
import { getInputs, trans500 } from "../../../utilities/misc";
import { FilterOptions } from "../FilterOptions/FilterOptions";

export const MangasFilter = () => {
  const filters: JSX.Element[] = [];
  let index = 0;

  for (const [key, values] of Object.entries(options)) {
    const ele = <FilterOptions key={index} optionId={key} values={values} />;

    filters.push(ele);

    index++;
  }

  return (
    <>
      <div className="mangas-filter">
        <div className="inner-con flex gap-5 place-items-end px-2">
          <div className="filters flex justify-end gap-5">{filters}</div>
          <div className="apply-con">
            <ApplyBtn />
          </div>
        </div>
      </div>
    </>
  );
};

const ApplyBtn = () => {
  const getValues = () => {
    const data = getInputs(".filter-select");
    const url = new URL(window.location.href);

    for (const [key, value] of Object.entries(data)) {
      if (key == "None") continue;
      url.searchParams.set(key, value);
    }

    window.location.assign(url);
  };

  return (
    <button
      onClick={getValues}
      type="button"
      className={`apply px-2 py-1 rounded-md border border-zinc-600 text-sm bg-zinc-800 hover:bg-red-700 ${trans500}`}
    >
      Apply
    </button>
  );
};

// (function () {
//   $(".apply-btn").click(function () {
//     const data = getInputs(".filter-select")
//     const url = buildUrl(data)
//     window.location.href = url;
//   });
// })();
