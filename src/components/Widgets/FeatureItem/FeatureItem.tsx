import type { Manga } from "../../../services/Manganato/manganatoTypes";
import { trans1000, truncate } from "../../../utilities/misc";
import { Ticks } from "../Ticks/Ticks";

export const FeatureItem = ({ item, className }: { item: Manga; className: string }) => {
  const { title, image_url, slug, status, synopsis, chapter, views, update, type, score } = item;
  const { name, slug: chapSlug } = chapter;
  const ticks = [type, update, views, score];

  return (
    <div className={`feature-item my-1 ${className}`} title={title}>
      <div className="inner-con h-48 bg-zinc-800 border border-zinc-600 border-l-4 border-l-zinc-600 mx-2 rounded flex justify-between">
        <div className="left-side-con pl-6 py-5">
          <div className="inner-con flex flex-col gap-2 relative">
            <div className="status text-xs text-gray-500">{status}</div>
            <div className="title">{truncate(title, 40)}</div>
            <div className="chapter">
              <a
                href={`/read/${slug}/${chapSlug}`}
                className={`chapter-link text-xs text-gray-400 hover:text-red-400 ${trans1000}`}
              >
                {truncate(name, 50)}
              </a>
            </div>
            <div className="synopsis">{synopsis}</div>
            <div className="ticks flex gap-2 items-center relative mt-2">
              <Ticks ticks={ticks} />
            </div>
            <div className="read-link-con flex justify-center">
              <a
                href={`/read/${slug}`}
                className={`read-link text-sm bg-red-700 hover:bg-red-500 mt-2 px-2 py-1 rounded-full ${trans1000}`}
              >
                Read Now
              </a>
            </div>
          </div>
        </div>
        <div className="right-side-con h-full">
          <div className="inner-con h-full rounded-r overflow-hidden">
            <img src={image_url} alt={title} className="feature-image relative left-5 bottom-2 rotate-12 h-56" />
          </div>
        </div>
      </div>
    </div>
  );
};
