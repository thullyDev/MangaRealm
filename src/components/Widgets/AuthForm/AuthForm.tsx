import type { _ForgotPassword, _Login, _RenewPassword, _Signup } from "../../../services/MangaRealm.api/types";
import { forgotPassword, login, renewPassword, signup } from "../../../services/MangaRealm.api/user";
import { ShowAlert, formatKey, getInputs, trans500 } from "../../../utilities/misc";
// import { HCaptcha } from "../HCaptcha/HCaptcha";
import { Input, type Item } from "../Input/Input";

interface _AuthForm {
  authType: string;
  label: string;
  inputs: Item[];
  redirect: JSX.Element;
}

interface _AuthInputData extends _Signup, _Login, _ForgotPassword, _RenewPassword {}

const closeClearAuth = () => {
  $(".auth-input").val("");
  $(".close-btn").click();
};

const authHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
  const thisEle = $(event.currentTarget);
  const authType: string = thisEle.data("type");
  const data = getInputs(`.auth-input-${authType}`) as unknown as _AuthInputData;

  for (const [key, value] of Object.entries(data)) {
    if (value) continue;

    ShowAlert(`${key} is empty`);
    return;
  }

  const loader = $(".auth-loader-con");
  const authFuncs: Record<string, Function[]> = {
    signup: [signup, () => {}],
    login: [login, closeClearAuth],
    forgot_password: [forgotPassword, () => {}],
    renew_password: [renewPassword, () => {}],
  };

  loader.fadeIn();
  await authFuncs[authType][0](data);
  authFuncs[authType][1]();
  loader.fadeOut();
};

export const AuthForm = ({ authType, label, inputs, redirect }: _AuthForm) => {
  // const captchaId = authType;
  return (
    <div className="auth-form-con flex justify-center">
      <div className="inner-con px-5 py-1 w-full">
        <div className="form-label-text-con flex flex-col gap-2 mb-2">
          <p className="form-label text-2xl">{formatKey(authType)}</p>
          <p className="form-text text-zinc-500 text-xs">{label}</p>
        </div>
        <div className="form-con">
          <form action="post">
            <div className="inputs-con flex flex-col gap-5">
              {inputs.map((item, index) => (
                <Input className={`auth-input-${authType} auth-input`} item={item} key={index} />
              ))}
            </div>
            {/*<HCaptcha captchaId={captchaId} />*/}
            <div className="submit-con w-full my-3">
              <button
                onClick={authHandler}
                type="button"
                className={`submit-btn text-sm flex justify-center bg-red-600 hover:bg-zinc-700 rounded w-full ${trans500} py-2`}
                data-type={authType}
              >
                Submit
              </button>
            </div>
            <div className="redirect-con w-full my-3">{redirect}</div>
          </form>
        </div>
      </div>
    </div>
  );
};
