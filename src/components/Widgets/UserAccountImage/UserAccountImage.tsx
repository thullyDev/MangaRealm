import type { _User } from "../../../services/MangaRealm.api/types";
import { trans500 } from "../../../utilities/misc";

export const UserAccountImage = ({ user }: { user: _User }) => {
  const { profile_image_url, username } = user;
  const profile_image = profile_image_url || "/default-img.jpeg";
  return (
    <div className="user-account-image-con flex flex-col gap-5">
      <div className="user-account-image-label-con">
        <h3 className="edit-avatar-label text-sm text-zinc-400">Edit Avatar</h3>
      </div>
      <div className="account-image-con h-full">
        <div className="inner-account-image-con">
          <div className="account-backdrop-con">{/*<img src="/account-backdrop.png" alt="backdrop" />*/}</div>
          <div className="profile-image-con">
            <div className="inner-con relative w-36 h-36">
              <img
                src={profile_image}
                alt={username}
                className="profile-image w-full h-full rounded-full cover border border-zinc-400"
              />
              <span
                className={`layover-cover ${trans500} cursor-pointer opacity-0 hover:opacity-100 hover:bg-black
            hover:bg-opacity-60 bg-opacity-60 absolute w-full h-full top-0 flex justify-center items-center flex-col
            gap-2 rounded-full`}
              >
                <i className="fa fa-pencil text-sm"></i>
                <p className="avatar-text text-sm">change Avatar</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
