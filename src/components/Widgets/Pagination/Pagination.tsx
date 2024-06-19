import type { Pagination as pagi } from "../../../services/Manganato/manganatoTypes";

export const Pagination = ({ pagination, query }: { pagination: pagi; query: string }) => {
  const { pages, page } = pagination;
  const pageEles: JSX.Element[] = [];
  const pageClass = `page-link inline-block py-1 px-3 text-sm `;

  for (let i = 1; i < parseInt(pages); i++) {
    const highlight = parseInt(page) == i ? "active bg-red-700 rounded-l" : "bg-zinc-800";
    const pageEle = (
      <a href={`${query}$page=${i}`} className={pageClass + highlight}>
        {i}
      </a>
    );
    pageEles.push(pageEle);

    if (i > 6) break;
  }
  pageEles.push(
    <>
      <span className={pageClass + "bg-zinc-800"}>
        <i className="fa-solid fa-ellipsis"></i>
      </span>
      <a href={`${query}$page=${pages}`} className={`${pageClass + "bg-zinc-800 rounded-r"}`}>
        {pages}
      </a>
    </>,
  );
  return (
    <div className="pagination-con flex justify-center mt-10">
      <ul className="flex">
        {pageEles.map((item) => {
          return <li className="page-item">{item}</li>;
        })}
      </ul>
    </div>
  );
};
