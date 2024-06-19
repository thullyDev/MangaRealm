import type { Manga } from "../../../../services/Manganato/manganatoTypes";
import { MangaWrapperThree } from "../../MangaWrapperThree/MangaWrapperThree";

export const SimilarsCon = ({ similars }: { similars: Manga[] }) => {
  return (
    <div className="similars-con mt-10">
      <div className="label-con">
        <h4 className="similars-label flex justify-center">You may also like</h4>
      </div>
      <div className="inner-similars-con">
        <ul className="similars-list mt-2 flex flex-col gap-2 items-center scrollable">
          {similars.map((manga, index) => {
            return (
              <li key={index} className="similar-item w-full max-w-96">
                <MangaWrapperThree item={manga} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
