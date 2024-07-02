import type { _User } from "../../../services/MangaRealm.api/types";
import { formatKey, titleCase } from "../../../utilities/misc";

export const UserDetails = ({ user }: { user: _User }) => {
const { email, username, created_at } = user;
const udInpItems = [
{
type: "text",
name: "join_date",
value: created_at,
isReadOnly: true,
},
{
type: "text",
name: "email",
value: email,
isReadOnly: false,
},
{
type: "text",
name: "username",
value: username,
isReadOnly: false,
},
];

const inputs: JSX.Element[] = [];
for (let i = 0; i
< udInpItems.length; i++) { const data=udInpItems[i]; const ele=<UDInput key={i} {...data} />;
inputs.push(ele);
}

return (
<div className="outer-user-details-con w-full">
  <div className="user-details-con">
    <div className="form-con">
      <form action="post" className="user-detailt-form flex gap-4 flex-col">
        {inputs}
        <div className="change-password-text-con flex justify-center">
          <button className="change-password-btn flex gap-2 items-center justify-center text-xs text-zinc-500">
            <i className="fas fa-lock"></i>
            <p className="change-password-text">change password</p>
          </button>
        </div>
        <div className="update-con w-full my-3 flex justify-center">
          <button type="button" className={`update-btn bg-zinc-600 py-1 px-2 rounded-md text-black text-xs`}>
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
);
};

interface _UDInput {
type: string;
name: string;
value: string;
isReadOnly: boolean;
}

const UDInput = ({ type, name, value, isReadOnly }: _UDInput) => {
const label = formatKey(name);
const key = name + "_input";
const input = isReadOnly ? (
<input className="border border-zinc-400 px-2 rounded bg-zinc-600 bg-opacity-70 text-sm" value={value} name={key}
  type={type} readOnly />
) : (
<input className="border border-zinc-400 px-2 rounded bg-zinc-700 bg-opacity-40 text-sm" onChange={()=> { }}
value={value}
name={key}
type={type}
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
