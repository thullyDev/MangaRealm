export interface _Signup {
	email: string,
	username: string,
	password: string,
	confirm: string,
	captchaResponse: string
}

export interface _Login {
	email: string,
	password: string,
	captchaResponse: string
}

export interface _ForgotPassword {
	email: string,
	captchaResponse: string
}

export interface _RenewPassword {
	password: string,
	confirm: string,
	captchaResponse: string
}