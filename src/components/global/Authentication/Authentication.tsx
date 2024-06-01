import { authItems } from "./authItems.ts"
import { AuthForm } from "../../Widgets/AuthForm/AuthForm"
import "./AuthenticationStyles.scss"

const labels: Record<string, string> = {
	signup: "Create an account to use full range of functions",
	login: "Welcome back fellow otaku",
	forgot_password: "We will send an email to your email inbox, just follow that link to set your new password",
	renew_password: "Please renew your password, you can use your old password if needed",
}

export const Authentication = () => {
	const formEles: JSX.Element[] = []

	let count = 0 
	for (const [authType, inputs] of Object.entries(authItems)){
		const className = count == 0 ? "outer-auth-form-con active" : "outer-auth-form-con"
		const ele = (
				<div className={className}>
					<AuthForm authType={authType} label={labels[authType]} inputs={inputs} />
				</div>
			)
		formEles.push(ele)
		count ++; 
	}

	return (
		<div className="outer-auth-forms-con">
			<div className="auth-forms-con">
				<div className="inner-con bg-neutral-800 rounded">
					<div className="close-con flex justify-end relative top-5 right-5">
						<button className="close-btn">
						    <i className="fa-solid fa-x"></i>
						</button>
					</div>
					<div className="second-inner-con">
						<div className="inner-auth-forms-con">
							{formEles}
						</div>
					</div>
					<div className="bg-img-con">
						<img src="/auth-bg-image.png" alt="Authentication Background Image" className="bg-img" />
					</div>
				</div>
			</div>
		</div>
	)
} 
