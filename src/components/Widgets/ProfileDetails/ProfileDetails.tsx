import type { _User } from "../../../services/MangaRealm.api/types";
import { UserDetails } from "../UserDetails./UserDetails";

export const ProfileDetails = ({ user }: { user: _User }) => {
  return (
    <div className="profile-details-con">
      <UserDetails user={user} />
    </div>
  );
};
