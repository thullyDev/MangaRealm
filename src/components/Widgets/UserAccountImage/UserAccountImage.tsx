import type { ChangeEvent } from "react";
import type { _User } from "../../../services/MangaRealm.api/types";
import { trans500 } from "../../../utilities/misc";
import { getImageSrc, uploadUserAvatarImage } from "../../../services/MangaRealm.api/user";

const handleFileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
  const fileInput = event.target;
  if (fileInput.files) {
    const src = await getImageSrc(fileInput);

    if (!src) {
      console.error('no Image source');
      return 
    }

    const res = uploadUserAvatarImage(src)

    if (!res) return

    $(".profile-image").attr("src", src)
  }
};

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
          <div className="profile-image-con flex items-center justify-center">
            <div className="inner-con relative w-36 h-36">
              <label className="w-full h-full" htmlFor="profileImageInput">
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
              </label>
              <input onChange={handleFileInputChange} type="file" className="hidden" id="profileImageInput"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
