export interface _AuthUser {
	email: string;
	profile_image_url: null | string;
	token: string;
	username: string;
}

export interface _Cookie {
	value: string;
	key: string;
}

export interface _Setcookie extends _Cookie {
  maxAge: number,
  secure?: boolean,
  httpOnly?: boolean,
}

export interface _AuthResponse {
	status_code: number;
	message: string;
	data: _AuthUser;
}

export interface _Signup {
	email: string;
	username: string;
	password: string;
	confirm: string;
	captchaResponse: string;
}

export interface _Login {
	email: string;
	password: string;
	captchaResponse: string;
}

export interface _ForgotPassword {
	email: string;
	captchaResponse: string;
}

export interface _RenewPassword {
	password: string;
	confirm: string;
	captchaResponse: string;
}
