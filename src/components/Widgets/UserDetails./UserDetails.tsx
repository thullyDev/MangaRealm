import type { _User } from "../../../services/MangaRealm.api/types";
import { formatKey, titleCase, truncate } from "../../../utilities/misc";

export const UserDetails = ({ user }: { user: _User }) => {
  const { email, username, created_at } = user;
  const createdAtDate = new Date(created_at).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const udInpItems = [
    {
      type: "text",
      name: "join_date",
      value: createdAtDate,
    },
    {
      type: "text",
      name: "username",
      value: titleCase(username),
    },
    {
      type: "text",
      name: "email",
      value: email,
    },
  ];

  const inputs: JSX.Element[] = [];
  for (let i = 0; i < udInpItems.length; i++) {
    const data = udInpItems[i];
    const ele = <DetailText key={i} {...data} />;
    inputs.push(ele);
  }

  return (
    <div className="outer-user-details-con w-full">
      <div className="user-details-con">
        <div className="form-con">
          <form className="user-detailt-form flex gap-4 flex-col">{inputs}</form>
        </div>
      </div>
    </div>
  );
};

interface _DetailText {
  type: string;
  name: string;
  value: string;
}

const DetailText = ({ type, name, value }: _DetailText) => {
  const label = formatKey(name);

  return (
    <div className="udinput-con">
      <div className="inner-con flex flex-col gap-1">
        <span className="udinput-label text-xs text-zinc-400">
          {titleCase(label)}
        </span>
        <p className="bg-zinc-800 bg-opacity-70 text-sm">{value}</p>
      </div>
    </div>
  );
};
