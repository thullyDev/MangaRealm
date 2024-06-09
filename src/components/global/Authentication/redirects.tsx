import $ from "jquery";
import { cancelRenewPassword } from "../../../services/MangaRealm.api/user";
import { showCloseEle } from "../../../utilities/misc";

export const labels: Record<string, string> = {
	signup: "Create an account to use full range of functions",
	login: "Welcome back fellow otaku",
	forgot_password:
		"We will send an email to your email inbox, just follow that link to set your new password",
	renew_password:
		"Please renew your password, you can use your old password if needed",
};

export const redirects: Record<string, JSX.Element> = {
	signup: <SignupRedirectBlock />,
	login: <LoginRedirectBlock />,
	forgot_password: <ForgotPasswordRedirectBlock />,
	renew_password: <RenewPasswordRedirectBlock />,
};

function SignupRedirectBlock() {
	return (
		<p className="text-xs text-zinc-400 text-center">
			Already Have an Account{" "}
			<button
				onClick={redirectFallBack}
				type="button"
				data-type="signup"
				data-rrtype="login"
				className="redirect-button text-red-500 underline"
			>
				Login
			</button>
		</p>
	);
}

function LoginRedirectBlock() {
	return (
		<span className="forgot-password-con flex flex-col gap-5">
			<p className="text-xs text-zinc-400 text-center">
				Create an Account{" "}
				<button
					onClick={redirectFallBack}
					type="button"
					data-type="login"
					data-rrtype="signup"
					className="redirect-button text-red-500 underline"
				>
					Signup
				</button>
			</p>
			<button
				onClick={redirectFallBack}
				type="button"
				data-type="login"
				data-rrtype="forgot_password"
				className="redirect-button text-sm text-zinc-500 underline"
			>
				Forgot Password
			</button>
		</span>
	);
}

function RenewPasswordRedirectBlock() {
	return (
		<button
			onClick={redirectFallBack}
			type="button"
			data-type="renew_password"
			data-rrtype="cancel"
			className="redirect-button text-red-500 text-center underline"
		>
			Cancel
		</button>
	);
}

function ForgotPasswordRedirectBlock() {
	return (
		<span className="forgot-password-con flex flex-col gap-5">
			<p className="text-xs text-zinc-400 text-center">
				Back to{" "}
				<button
					onClick={redirectFallBack}
					type="button"
					data-type="forgot_password"
					data-rrtype="login"
					className="redirect-button text-red-500 underline"
				>
					Login
				</button>
			</p>
			<button
				type="button"
				data-type="forgot_password"
				className="resend-button text-sm text-zinc-500 underline"
			>
				Resend
			</button>
		</span>
	);
}

function redirectFallBack(event: React.MouseEvent<HTMLButtonElement>) {
	const eventEle = $(event.currentTarget);
	const rrtype = eventEle.data("rrtype");
	const type = eventEle.data("type");

	if (rrtype == "cancel") {
		cancelRenewPassword();
		showCloseEle(event);
		return;
	}

	const activeAuthCon = $(".outer-auth-form-con.active");
	const authCon = $(`.outer-auth-form-con[data-type="${rrtype}"]`);

	activeAuthCon?.removeClass("active");
	authCon?.addClass("active");
}
