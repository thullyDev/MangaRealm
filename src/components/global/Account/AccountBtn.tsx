import { isUserAuth } from "../../../services/MangaRealm.api/user";
import { showCloseEle } from "../../../utilities/misc";

export const AccountBtn = ({ defaultImg }: { defaultImg: string }) => {
  const redirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isUserAuth()) {
      showCloseEle(event);
      return;
    }

    window.location.assign("/profile");
  };

  //@ts-ignore
  const profile_image_url = window.user.profile_image_url || defaultImg

  return (
    <button
      onClick={redirect}
      type="button"
      data-element=".outer-auth-forms-con"
      data-animate="fade"
      className="account-button w-10 h-10"
    >
      <img
        src={profile_image_url}
        alt={"account profile image"}
        className="profile-image w-full h-full rounded-full cover border border-zinc-300"
      />
    </button>
  );
};
