import { useState } from "react";
import type { MangasResponse } from "../../../services/Manganato/manganatoTypes";
import { ListMangaWrapper } from "../ListMangaWrapper/ListMangaWrapper";
import "../MangasWrapper/MangasWrapperStyles.scss";
import { Pagination } from "../Pagination/Pagination";
import DOMPurify from "dompurify";

export const UserListCon = ({ listMangas, urlPath }: { urlPath: string; listMangas: MangasResponse }) => {
  const [value, setValue] = useState("");

  const filterLink: string = `/profile?keywords=${value}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = DOMPurify.sanitize(event.target.value);
    setValue(encodeURIComponent(rawValue));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) window.location.assign(filterLink);
  };

  const { mangas, pagination } = listMangas;
  const url = new URL(urlPath);
  return (
    <div className={"mangas-con mt-5 w-full"}>
      <div className=" inner-con px-2">
        <div className="manga-label-more-con flex mb-2 items-end justify-between">
          <h3 className="manga-label text-xl">My List</h3>
          <form onSubmit={handleSubmit} className="w-full max-w-80">
            <input
              type="text"
              placeholder="Search list..."
              name="list-search"
              value={decodeURIComponent(value)}
              onChange={handleChange}
              className="list-search bg-zinc-800 text-sm px-2 py-1 border border-zinc-400 rounded w-full"
            />
          </form>
        </div>
        <div className="inner-con">
          <ul className="mangas-list user-mangas-list flex justify-start">
            {mangas.map((item, index) => {
              return (
                <li className={`manga-list-item manga-list-item-1 user-manga-item`}>
                  <ListMangaWrapper key={index} item={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Pagination pagination={pagination} url={url} />
    </div>
  );
};
