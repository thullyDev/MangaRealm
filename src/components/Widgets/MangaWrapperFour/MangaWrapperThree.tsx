import type { TopAiringManga } from "../../../services/Manganato/manganatoTypes";
import { truncate } from "../../../utilities/misc";

export const MangaWrapperFour = ({ item }: { item: TopAiringManga }) => {
  const { title, image_url, slug } = item;

  return (
    <div className="manga-item w-full">
      <div className="inner-con bg-zinc-800 border border-zinc-600 rounded-md">
        <a href={`/read${slug}`} className="manga-link flex gap-2">
          <span className="poster-con">
            <img src={image_url} alt={title} title={title} className="poster w-20 rounded-l-md" />
          </span>
          <span className="title-update-views-chapters-con w-full py-2">
            <p className="title" title={title}>
              {truncate(title, 50)}
            </p>
          </span>
        </a>
      </div>
    </div>
  );
};
