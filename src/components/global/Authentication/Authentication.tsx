import { authItems } from "./authItems.ts";
import { AuthForm } from "../../Widgets/AuthForm/AuthForm";
import "./AuthenticationStyles.scss";
import { showCloseEle } from "../../../utilities/misc.ts";
import { labels, redirects } from "./redirects.tsx";
import { Loader } from "../../Widgets/Loader/Loader.tsx";

export const Authentication = ({ authApiUrl }: { authApiUrl: string }) => {
  const formEles: JSX.Element[] = [];

  let count = 0;
  for (const [authType, inputs] of Object.entries(authItems)) {
    const className = count == 0 ? "outer-auth-form-con active" : "outer-auth-form-con";
    const ele = (
      <div key={count} data-type={authType} className={className}>
        <AuthForm redirect={redirects[authType]} authType={authType} label={labels[authType]} inputs={inputs} />
      </div>
    );
    formEles.push(ele);
    count++;
  }

  return (
    <div data-open="false" className="outer-auth-forms-con">
      <div className="auth-forms-con">
        <div className="inner-con bg-neutral-800 relative rounded">
          <div className="close-con flex justify-end relative top-5 right-5">
            <button
              className="close-btn"
              onClick={showCloseEle}
              type="button"
              data-element=".outer-auth-forms-con"
              data-animate="fade"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="second-inner-con relative">
            <div className="inner-auth-forms-con">{formEles}</div>
            <div className="auth-loader-con flex justify-center items-center rounded">
              <Loader />
            </div>
          </div>
          <div className="bg-img-con">
            <img src="/auth-bg-image.png" alt="Authentication Background Image" className="bg-img" />
          </div>
        </div>
      </div>
      <input value={authApiUrl} type="hidden" className="auth-api-inpt" readOnly />
    </div>
  );
};
