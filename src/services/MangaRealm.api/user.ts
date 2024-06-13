// import $ from "jquery"
import {
	ApiHandler,
	type RequestOptions,
} from "../../utilities/handlers/apiHandler";
import type { _ForgotPassword, _Login, _RenewPassword, _Signup } from "./types";
import { _Alert, isEmailValid } from "../../utilities/misc";

const authApi = new ApiHandler("");

export const setBookmark = () => {
	return true;
};

export const isUserAuth = () => {
	return false;
};

export async function cancelRenewPassword() {}

export async function signup({
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
	const data = await request("/signup", params, captchaResponse);

	return true;
}

export async function login({ captchaResponse, email, password }: _Login) {
	if (!isEmailValid(email)) {
		_Alert("email is invalid");
		return;
	}

	if (password.length < 10) {
		_Alert("password should be atleast 10 characters");
		return;
	}
	const params = { email, password };
	const data = await request("/login", params, captchaResponse);
	console.log(data)
	return true;
}

export async function forgotPassword({ captchaResponse, email }: _ForgotPassword) {
	if (!isEmailValid(email)) {
		_Alert("email is invalid");
		return;
	}
	const params = { email };
	const data = await request("/forgot_password", params, captchaResponse);
	return true;
}

export async function renewPassword({
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
	const data = await request("/renew_password", params, captchaResponse);
	return true;
}

async function request(
	endpoint: string,
	params: RequestOptions,
	captchaResponse: string,
) {
	const headers = {
		"Content-Type": "application/json",
		// captchaToken: captchaResponse,
	};
	const base = getAuthApiUrl() 
	return await authApi.post(base + endpoint, params, { headers });
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
