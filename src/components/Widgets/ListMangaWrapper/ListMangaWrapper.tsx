import type React from "react";
import type { Manga } from "../../../services/Manganato/manganatoTypes";
import { trans1000, truncate } from "../../../utilities/misc";
import { Poster } from "../Poster/Poster";
import { removeItemFromList } from "../../../services/MangaRealm.api/user";
import $ from "jquery"

const showLoader = () => {
  $(".close-al-loader-btn").click()
}

const removeHandler = (event:  React.MouseEvent<HTMLButtonElement>) => {
  const thisEle = $(event.currentTarget);
  const slug: string = thisEle.data("slug");
  // @ts-ignore
  const { email, auth_token } = window.user
  showLoader()
  const res = removeItemFromList({slug, email, auth_token}) 
  showLoader()
  

  if (!res) return  

  $(`.manga-item[data-slug="${slug}"]`).fadeOut()
}

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
    <div data-slug={slug} className="manga-item flex items-start relative">
      <div className="inner-con border border-zinc-600 rounded-md w-full">
        <a href={`read/${slug}`} className="manga-link" title={title}>
          <Poster {...posterProps} />
          <span className="title-con">
            <p className={`title text-sm bg-zinc-800 p-1 rounded-b-md text-center hover:bg-zinc-600 ${trans1000}`}>
              {truncatedTitle}
            </p>
          </span>
        </a>
      </div>
      <button
        data-slug={slug} 
        onClick={removeHandler}
        className={`lm-remove-btn bg-red-600 absolute w-8 h-8 rounded-full top-2 right-2 flex justify-center items-center hover:bg-zinc-600 ${trans1000}`}
      >
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
};
