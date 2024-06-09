// import $ from "jquery"
import { ApiHandler, type RequestOptions } from "../../utilities/handlers/apiHandler"
import { authApiUrl } from "../../utilities/config"
import type { _ForgotPassword, _Login, _RenewPassword, _Signup } from "./types"
import { isEmailValid } from "../../utilities/misc"

const authApi = new ApiHandler(authApiUrl)

export const setBookmark = () => {
	return true
}

export const isUserAuth = () => {
  return false
}

export function cancelRenewPassword() {
}

export function signup({ captchaResponse, email, username, password, confirm } : _Signup): boolean {
	// const params = {

	// }
	// const data = request("/signup", params, captchaResponse)

	return true
}

export function login({ captchaResponse, } : _Login): boolean  {
	const params = {
	}
	// const data = request("/signup", params, captchaResponse)
	return true
}

export function forgotPassword({ captchaResponse } : _ForgotPassword): boolean  {
	const params = {

	}
	// const data = request("/signup", params, captchaResponse)
	return true
}

export function renewPassword({ captchaResponse } : _RenewPassword): boolean  {
	const params = {

	}
	// const data = request("/signup", params, captchaResponse)
	return true
}


function request(endpoint: string, params: RequestOptions, captchaResponse: string) {
	const headers = createAuthHeaders(captchaResponse)
	return authApi.post(endpoint, params, { headers })
}

function createAuthHeaders(captchaResponse: string ) {
	return {
		"Content-Type": 'application/json',
		"captchaResponse": captchaResponse,
	}
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
