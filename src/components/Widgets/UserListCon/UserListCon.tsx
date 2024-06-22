import type { Manga, MangasResponse } from "../../../services/Manganato/manganatoTypes";
import { ListMangaWrapper } from "../ListMangaWrapper/ListMangaWrapper";
import "../MangasWrapper/MangasWrapperStyles.scss"

export const UserListCon = ({ listMangas }: { listMangas: MangasResponse }) => {
  console.log({ listMangas })
  const { mangas } = listMangas;

  return (
    <div className={"mangas-con mt-5 "}>
      <div className="inner-con px-2">
        <div className="manga-label-more-con flex justify-between mb-2 items-end">
          <h3 className="manga-label text-xl">My List</h3>
          <input type="text" placeholder="Search list..." name="list-search" className="list-search bg-zinc-800 text-sm px-2 py-1 border border-zinc-400 rounded w-full max-w-80" />
        </div>
        <div className="inner-con">
          <ul className="mangas-list">
            {mangas.map((item, index) => {
              return ( 
                  <li className={`manga-list-item manga-list-item-1`}>
                    <ListMangaWrapper key={index} item={item} />
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
