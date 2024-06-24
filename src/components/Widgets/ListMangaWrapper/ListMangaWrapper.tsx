import type { Manga } from "../../../services/Manganato/manganatoTypes";
import { trans1000, truncate } from "../../../utilities/misc";
import { Poster } from "../Poster/Poster";

export const ListMangaWrapper = ({ item }: { item: Manga }) => {
  const { title, image_url, slug } = item;
  const posterProps = {
    image_url,
    title,
    imageStyles: "rounded-t-md",
    wrapperStyles: "",
  };
  const truncatedTitle = truncate(title, 14);

  return (
    <div className="manga-item flex items-start relative">
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
      <button className="lm-remove-btn bg-red-600 absolute w-8 h-8 rounded-full top-2 right-2 flex justify-center items-center">
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
};
