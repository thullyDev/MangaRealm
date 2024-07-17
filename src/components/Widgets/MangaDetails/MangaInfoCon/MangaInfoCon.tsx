import { getSettings, getValues } from "../../../../services/MangaRealm.api/admin/handlers";
import { setTokenToCookies } from "../../../../services/MangaRealm.api/cookies";
import { setBookmark } from "../../../../services/MangaRealm.api/user";
import type { MangaRead } from "../../../../services/Manganato/manganatoTypes";
import { ShowAlert, trans500, truncate } from "../../../../utilities/misc";
import { ClickLoader } from "../../ClickLoader/ClickLoader";
import $ from "jquery"

interface socialsType {
  icon: JSX.Element;
  link: string;
  color: string;
  name: string;
}

const showLoader = () => {
  $(".close-al-loader-btn").click()
}


const bookmark = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
  const settings = await getSettings()
  const disableAddToList = settings.add_list.value

  if (disableAddToList == true) {
    ShowAlert("book mark has been disabled");
    return;
  }


  const slug: string | undefined = event.currentTarget.dataset.slug;

  if (!slug) {
    ShowAlert("Failed to get slug from element data attributes");
    return;
  }

  //@ts-ignore
  const email = window.user.email;
  //@ts-ignore
  const auth_token = window.user.auth_token;

  if (!email || !auth_token) {
    $(".outer-auth-forms-con .close-btn").click()
    return
  }

  showLoader()
  const isSet: null | boolean = await setBookmark(slug, email, auth_token);
  showLoader()

  if (isSet == null) {
    ShowAlert("Failed to set bookmark");
    return;
  }

  const bookmarkIcon: JQuery<HTMLElement> = $(".bookmark-icon");

  if (isSet == false) {
    bookmarkIcon.removeClass("text-red-700");
    bookmarkIcon.removeClass("fa-solid");
    bookmarkIcon.addClass("fa-regular");
  }

  if (isSet == true) {
    bookmarkIcon.removeClass("fa-regular");
    bookmarkIcon.addClass("text-red-700");
    bookmarkIcon.addClass("fa-solid");
  }
};


const values = await getValues()
const siteName = values.inputs.site_name.value 

export const MangaInfoCon = ({ token, isBookMarked, manga, url }: { token: string; isBookMarked: boolean; manga: MangaRead; url: string }) => {
  setTokenToCookies(token) //! setting the token on the frontend cause of problems with astro server

  const { title, image, description, alt_names, status, manga_id } = manga;
  const shareText = `Read on ${title} On ${siteName} for and with no ads`;
  const encodedShareText = encodeURIComponent(shareText);
  const socials: socialsType[] = [
    // TODO: make them match their respective links
    {
      name: "Twitter",
      color: "bg-cyan-700",
      icon: <i className={`fab fa-twitter text-sm hover:text-zinc-400 ${trans500}`}></i>,
      link: `https://www.twitter.com/home?status=${encodedShareText}%20${url}`,
    },
    {
      name: "Reddit",
      color: "bg-orange-600",
      icon: <i className={`fab fa-reddit text-sm hover:text-zinc-400 ${trans500}`}></i>,
      link: `https://www.reddit.com/submit?url=${url}&title=${encodedShareText}`,
    },
    {
      name: "Facebook",
      color: "bg-sky-800",
      icon: <i className={`fab fa-facebook text-sm hover:text-zinc-400 ${trans500}`}></i>,
      link: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
  ];
  const bookMarkStyleAndColor = isBookMarked == true ? "fa-solid text-red-700" : "fa-regular"
  return (
    <div className="image-info-con">
      <div className="poster-side">
        <div className="inner-poster-btns-con flex flex-col justify-center">
          <div className="inner-image-con h-60 flex justify-center relative">
            <img src={image} alt={title} title={title} className="poster h-full border border-zinc-500 rounded-md" />
            <ClickLoader buttonId="close-al-loader-btn" loaderId="outer-al-loader" />
          </div>
          <div className="actions-btns-con flex justify-center mt-2">
            <button
              onClick={bookmark}
              data-slug={manga_id}
              type="button"
              className={`bookmark-btn border border-zinc-500
              w-20 py-1 bg-zinc-700 hover:bg-zinc-400 rounded-l-full ${trans500}`}
            >
              <i className={ `${bookMarkStyleAndColor} fa-bookmark bookmark-icon` }></i>
              {/*<i className="fa-solid fa-bookmark"></i>*/}
            </button>
            <button
              type="button"
              className={`share-btn border border-zinc-500 w-20 py-1 bg-zinc-800 hover:bg-zinc-400
              rounded-r-full ${trans500}`}
            >
              <i className="fa-solid fa-share"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="manga-info-con">
        <div className="status-names-con flex gap-1 flex-col my-2">
          <span className="status-con">
            <p className="status text-xs text-zinc-400">{status}</p>
          </span>
          <h3 className="title text-2xl" title={title}>
            {title}
          </h3>
          <span className="alt-names">
            <p className="text-red-300 text-xs my-2">{alt_names}</p>
          </span>
        </div>
        {/*<div className="manga-acts-con flex justify-center my-2">
          <a href={readlink} className="read-link bg-red-600 py-1 px-2 rounded-md">
            Read Now
          </a>
        </div>*/}
        <div className="description-con mb-5">
          <span className="description truncated-description flex">
            <p className="text-zinc-300 text-sm">
              {truncate(description, 250)}
              <button className={`expand-btn text-xs text-zinc-300 ml-1 hover:text-red-500 ${trans500}`}>more</button>
            </p>
          </span>
          <div className="outer-description-modal-con">
            <div className="description-modal-con">
              <div className="inner-con border border-zinc-500 px-2 bg-zinc-800">
                <div className="close-btn-con">
                  <button className="close-btn">
                    <i className="fa-solid fa-x text-xl text-zinc-500"></i>
                  </button>
                </div>
                <span className="description scrollable">
                  <p>{description}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="socials-con flex gap-1 justify-center flex-wrap mb-5">
          {socials.map(({ icon, link, name, color }) => {
            return (
              <a
                href={link}
                target="_blank"
                className={`social-link w-28 items-center gap-3 text-sm flex justify-center
            rounded-md ${color} hover:bg-zinc-700 ${trans500} py-1 px-2`}
              >
                {icon} {name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
