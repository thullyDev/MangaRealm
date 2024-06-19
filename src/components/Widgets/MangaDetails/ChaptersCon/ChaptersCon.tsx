import { useState } from "react";
import type { Chapter, MangaRead } from "../../../../services/Manganato/manganatoTypes";
import DOMPurify from "dompurify";
import { truncate } from "../../../../utilities/misc";
import $ from "jquery";

const ChaptersInput = ({ chaptersLength }: { chaptersLength: number }) => {
  const [value, setValue] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanValue = DOMPurify.sanitize(event.target.value);
    setValue(cleanValue);
    $(`.chapter-item[data-index="${cleanValue}"]`)[0].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="chapter-input-con">
      <div className="inner-con flex gap-1 bg-zinc-600 pl-2 rounded-md">
        <span>
          <i className="fa fa-search text-xs"></i>
        </span>
        <input
          onChange={changeHandler}
          placeholder={`Chapter Number... `}
          type="number"
          value={value}
          className="chapters-input bg-inherit outline-none text-sm"
        />
      </div>
    </div>
  );
};

export const ChaptersCon = ({ manga }: { manga: MangaRead }) => {
  const { chapters, manga_id } = manga;

  return (
    <div className="chapters-con">
      <div className="chapters-amount-input-con flex justify-between bg-zinc-700 py-2 px-3 w-full rounded-t-md">
        <div className="chapters-amount-con text-sm flex items-end">{chapters.length} Chapters</div>
        <ChaptersInput chaptersLength={chapters.length} />
      </div>
      <ChaptersList chapters={chapters} manga_id={manga_id} />
    </div>
  );
};

const ChaptersList = ({ chapters, manga_id }: { manga_id: string; chapters: Chapter[] }) => {
  return (
    <div className="inner-chapters-con">
      <ul className="chapters-list flex gap-px flex-col h-80 overflow-auto scrollable">
        {chapters.map(({ views, name, slug }, index) => {
          const chunks = slug.split("-");
          const chapterNumber = chunks[chunks.length - 1];
          return (
            <li key={index} data-index={chapterNumber} className="chapter-item bg-zinc-800 ">
              <a
                href={`${manga_id}${slug}`}
                title={name}
                className="chapter-link text-base flex justify-between gap-2 items-center px-2 py-3"
              >
                <p className="chapter-index text-xs text-zinc-500">{chapterNumber}</p>
                <p className="name text-sm">{truncate(name, 50)}</p>
                <span className="views flex items-center gap-1 text-sm text-zinc-500">
                  <i className="fas fa-eye"></i>
                  {views}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
