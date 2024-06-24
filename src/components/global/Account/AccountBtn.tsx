import { isUserAuth } from "../../../services/MangaRealm.api/user";
import { showCloseEle } from "../../../utilities/misc";

export const AccountBtn = () => {
  const redirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isUserAuth()) {
      showCloseEle(event);
      return;
    }

    window.location.assign("/profile");
  };

  const profile_image_url = null;
  const profile_image = profile_image_url || "/default-img.jpeg";

  return (
    <button
      onClick={redirect}
      type="button"
      data-element=".outer-auth-forms-con"
      data-animate="fade"
      className="account-button w-10 h-10"
    >
      <img
        src={profile_image}
        alt={"account profile image"}
        className="profile-image w-full h-full rounded-full cover border border-zinc-300"
      />
    </button>
  );
};
