import type { Manga, MangasResponse } from "../../../services/Manganato/manganatoTypes";
import { trans1000, truncate } from "../../../utilities/misc";
import { Poster } from "../Poster/Poster";

export const UserListCon = ({ listMangas }: { listMangas: MangasResponse }) => {
  const { mangas } = listMangas;
  const mangasEle: JSX.Element[] = [];

  for (let i = 0; i < mangas.length; i++) {
    // console.log({ manga: mangas[i] })
    mangasEle.push(<ListMangaWrapper key={i} item={mangas[i]} />);
  }

  return (
    <div className="user-list-con">
      <div className="inner-con">
        <div className="list-search-label-con">
          <h3 className="list-label">My list</h3>
          <input type="search" name="list-search" className="list-search" />
        </div>
        <div className="list-items-con">
          <ul className="manga-list">{mangasEle}</ul>
        </div>
      </div>
    </div>
  );
};

const ListMangaWrapper = ({ item }: { item: Manga }) => {
  const { title, image_url, slug } = item;
  const posterProps = {
    image_url,
    title,
    imageStyles: "rounded-t-md",
    wrapperStyles: "",
  };
  const truncatedTitle = truncate(title, 14);

  return (
    <div className="manga-item">
      <div className="inner-con border border-zinc-600 rounded-md">
        <a href={`read${slug}`} className="manga-link" title={title}>
          <Poster {...posterProps} />
          <span className="title-con">
            <p className={`title text-sm bg-zinc-800 p-1 rounded-b-md text-center hover:bg-zinc-600 ${trans1000}`}>
              {truncatedTitle}
            </p>
          </span>
        </a>
      </div>
      <button className="lm-remove-btn">
        <i className="fa-solid fa-x"></i>
      </button>
    </div>
  );
};
