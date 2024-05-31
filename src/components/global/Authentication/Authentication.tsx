import { authItems } from "./authItems.ts"
import { AuthForm } from "../../Widgets/AuthForm/AuthForm"

const labels: Record<string, string> = {
	signup: "Create an account to use full range of functions...",
	login: "Welcome back fellow otaku...",
	forgot_password: "We will send an email to your email inbox, just follow that link to set your new password.",
	renew_password: "Please renew your password, you can use your old password if needed.",
}

export const Authentication = () => {
	const formEles: JSX.Element[] = []

	for (const [key, inputs] of Object.entries(authItems)){
		const ele = <AuthForm key={key} label={labels[key]} inputs={inputs} />
		formEles.push(ele) 
	}

	return (
		<div className="auth-forms-con">
			{formEles}
			<div className="bg-img-con">
				<img src="/auth-bg-image.png" alt="Authentication Background Image" className="bg-img" />
			</div>
		</div>
	)
} 
