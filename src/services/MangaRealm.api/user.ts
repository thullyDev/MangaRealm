import $ from "jquery"
import { ApiHandler } from "../../utilities/handlers/apiHandler"
import { authApiUrl } from "../../utilities/config"

const authApi = new ApiHandler(authApiUrl)

export const setBookmark = () => {
	return true
}

export const isUserAuth = () => {
  return false
}

export function cancelRenewPassword() {
}

export function signup() {
}

export function login() {
}

export function forgotPassword() {
}

export function renewPassword() {
}

function verifyUser() {
}
// const options: RequestOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     timeout: 5000
// };