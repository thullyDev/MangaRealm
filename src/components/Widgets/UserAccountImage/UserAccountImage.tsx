interface _UserAccountImage {
  profile_image_url: string | null;
  username: string;
}

const UserAccountImage = ({ profile_image_url, username }: _UserAccountImage) => {
  const profile_image = profile_image_url || "/default-img.png";
  return (
    <div className="user-account-image-con">
      <div className="user-account-image-label-con">
        <h3 className="edit-avatar-label">Edit Avatar</h3>
      </div>
      <div className="account-image-con">
        <div className="inner-account-image-con">
          <div className="account-backdrop-con">
            <img src="/account-backdrop.png" alt="backdrop" />
          </div>
          <div className="profile-image-con">
            <div className="inner-con">
              <img src={profile_image} alt={username} className="profile-image" />
              <span className="layover-cover">
                <i class="fa fa-pencil"></i>
                <p className="avatar-text">change Avatar</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
