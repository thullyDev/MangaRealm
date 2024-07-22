import type { _User } from "../../../services/MangaRealm.api/types";
import { UserAccountImage } from "../UserAccountImage/UserAccountImage";
import { UserDetails } from "../UserDetails./UserDetails";
import "./ProfileDetailsStyles.scss";

export const ProfileDetails = ({ user }: { user: _User }) => {
  return (
    <div className="outer-profile-details-con flex w-full px-2">
      <div className="profile-details-con bg-zinc-800 flex p-2 gap-5 rounded-md border border-zinc-700 w-full">
        <UserAccountImage user={user} />
        <UserDetails user={user} />
      </div>
    </div>
  );
};
