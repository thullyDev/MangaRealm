import { forgotPassword, login, renewPassword, signup } from "../../../services/MangaRealm.api/user";
import { _Alert, formatKey, getInputs, titleCase, trans500 } from "../../../utilities/misc";
import { HCaptcha } from "../HCaptcha/HCaptcha";
import { Input, type Item } from "../Input/Input";


interface _AuthForm {
	authType: string;
	label: string;
	inputs: Item[];
	redirect: JSX.Element;
}

const authHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	const thisEle = $(event.currentTarget);
	const authType: string = thisEle.data("type")
	 // @ts-ignore
	const captchaResponse = window.getCaptchaResponse(`captcha-${authType}`)
	
	if (!captchaResponse) {
		_Alert("Please do the captcha")
		return
	}


	// const data = getInputs(`.auth-input-${authType}`)


	// if (authType == "signup") {
	// 	signup()
	// 	return
	// }

	// if (_type == "lgoin") {
	// 	login()
	// 	return
	// }

	// if (_type == "forgot_password") {
	// 	forgotPassword()
	// 	return
	// }

	// if (_type == "renew_password") {
	// 	renewPassword()
	// 	return
	// }
}


export const AuthForm = ({ authType, label, inputs, redirect }: _AuthForm) => {
	const captchaId = authType
	return (
		<div className="auth-form-con flex justify-center" >
			<div className="inner-con px-5 py-1">
				<div className="form-label-text-con flex flex-col gap-2 mb-2">
					<p className="form-label text-2xl">
						{formatKey(authType)}
					</p>
					<p className="form-text text-zinc-500 text-xs">
						{label}
					</p>
				</div>
				<div className="form-con">
					<form action="post">
						<div className="inputs-con flex flex-col gap-5">
							{
								inputs.map((item, index) => <Input className={`auth-input-${authType}`} item={item} key={index} />)
							}
						</div>
						<HCaptcha captchaId={captchaId} />
						<div className="submit-con w-full my-3">
							<button onClick={authHandler} type="button" className={ `submit-btn text-sm flex justify-center bg-red-600 hover:bg-zinc-700 rounded w-full ${trans500} py-2` } data-type={authType} >
								Submit
							</button>
						</div>
						<div className="redirect-con w-full my-3">
							{redirect}
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}


