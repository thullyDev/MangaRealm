// import $ from "jquery"
import {
	ApiHandler,
	type RequestOptions,
} from "../../utilities/handlers/apiHandler";
import type { _ForgotPassword, _Login, _RenewPassword, _Signup } from "./types";
import { _Alert, isEmailValid } from "../../utilities/misc";

// @ts-ignore
const authApi = new ApiHandler("");

export const setBookmark = () => {
	return true;
};

export const isUserAuth = () => {
	return false;
};

export function cancelRenewPassword() {}

export function signup({
	captchaResponse,
	email,
	username,
	password,
	confirm,
}: _Signup) {
	if (!isEmailValid(email)) {
		_Alert("email is invalid");
		return;
	}

	if (password.length < 10) {
		_Alert("password should be atleast 10 characters");
		return;
	}

	if (confirm != password) {
		_Alert("confirm and password dont match");
		return;
	}

	const params = { email, username, password, confirm };
	const data = request("/signup", params, captchaResponse);

	return true;
}

export function login({ captchaResponse, email, password }: _Login) {
	if (!isEmailValid(email)) {
		_Alert("email is invalid");
		return;
	}

	if (password.length < 10) {
		_Alert("password should be atleast 10 characters");
		return;
	}
	const params = { email, password };
	const data = request("/login", params, captchaResponse);
	return true;
}

export function forgotPassword({ captchaResponse, email }: _ForgotPassword) {
	if (!isEmailValid(email)) {
		_Alert("email is invalid");
		return;
	}
	const params = { email };
	const data = request("/forgot_password", params, captchaResponse);
	return true;
}

export function renewPassword({
	captchaResponse,
	confirm,
	password,
}: _RenewPassword) {
	if (password.length < 10) {
		_Alert("password should be atleast 10 characters");
		return;
	}

	if (confirm != password) {
		_Alert("confirm and password dont match");
		return;
	}

	const params = { password, confirm };
	const data = request("/renew_password", params, captchaResponse);
	return true;
}

function request(
	endpoint: string,
	params: RequestOptions,
	captchaResponse: string,
) {
	const headers = {
		"Content-Type": "application/json",
		captchaResponse: captchaResponse,
	};
	const base = getAuthApiUrl() 
	return authApi.post(base + endpoint, params, { headers });
}

function getAuthApiUrl(): string {
	const inp = document.querySelector(".auth-api-inpt") as HTMLInputElement
	if (!inp)
		return ""

	return inp.value
}

// const options: RequestOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     timeout: 5000
// };

// function isValid(email: string, confirm: string, password: string): boolean {
// 		const isPasswordValid = password == confirm || password.length >= 10
// 		return !isEmailValid(email) || !isPasswordValid
// }
