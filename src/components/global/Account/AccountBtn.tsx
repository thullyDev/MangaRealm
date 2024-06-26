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
  return (
    <button
      onClick={redirect}
      type="button"
      data-element=".outer-auth-forms-con"
      data-animate="fade"
      className="account-button w-8 h-8"
    >
      <i className="fa-regular fa-user-circle text-3xl"></i>
    </button>
  );
};
