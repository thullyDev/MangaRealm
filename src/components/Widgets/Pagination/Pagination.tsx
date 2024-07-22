import type { Pagination as pagi } from "../../../services/Manganato/manganatoTypes";

export const Pagination = ({ pagination, url }: { pagination: pagi; url: URL }) => {
  const { pages, page } = pagination;
  const pageEles: JSX.Element[] = [];
  const pageClass = `page-link inline-block py-1 px-3 text-sm `;

  for (let i = 1; i <= parseInt(pages); i++) {
    const className = i == 1 ? "rounded-l" : "";

    const highlight = parseInt(page) == i ? "active bg-red-700" : "bg-zinc-800";
    url.searchParams.set("page", JSON.stringify(i));
    const query = url.toString();
    const pageEle = (
      <a key={i} href={`${query}`} className={`${pageClass} ${highlight} ${className}`}>
        {i}
      </a>
    );
    pageEles.push(pageEle);

    if (i > 6) break;
  }
  url.searchParams.set("page", pages);
  const query = url.toString();

  pageEles.push(
    <>
      <span className={pageClass + "bg-zinc-800"}>
        <i className="fa-solid fa-ellipsis"></i>
      </span>
      <a href={`${query}`} className={`${pageClass} bg-zinc-800 rounded-r`}>
        {pages}
      </a>
    </>,
  );

  return (
    <div className="pagination-con flex justify-center mt-10">
      <ul className="flex">
        {pageEles.map((item, index) => {
          return <li key={index} className="page-item">{item}</li>;
        })}
      </ul>
    </div>
  );
};
