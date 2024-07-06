import type { _User } from "../../../services/MangaRealm.api/types";
import { formatKey, titleCase } from "../../../utilities/misc";

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
      name: "email",
      value: email,
    },
    {
      type: "text",
      name: "username",
      value: username,
    },
  ];

  const inputs: JSX.Element[] = [];
  for (let i = 0; i < udInpItems.length; i++) {
    const data = udInpItems[i];
    const ele = <UDInput key={i} {...data} />;
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

interface _UDInput {
  type: string;
  name: string;
  value: string;
}

const UDInput = ({ type, name, value }: _UDInput) => {
  const label = formatKey(name);
  const key = name + "_input";
  const input = (
    <input
      className="border outline-none border-zinc-400 px-2 rounded bg-zinc-600 bg-opacity-70 text-sm"
      value={value}
      name={key}
      type={type}
      readOnly
    />
  );

  return (
    <div className="udinput-con">
      <div className="inner-con flex flex-col gap-1">
        <label htmlFor={key} className="udinput-label text-xs text-zinc-400">
          {titleCase(label)}
        </label>
        {input}
      </div>
    </div>
  );
};
