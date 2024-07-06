import type { Manga } from "../Manganato/manganatoTypes";

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
  maxAge: number;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
}

export interface _Response {
  message: string;
  status_code: number;
}

export interface _AuthResponse extends _Response {
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

export interface _User {
  email: string;
  username: string;
  profile_image_url: string | null;
  created_at: string;
}

export interface _ProfileData {
  pagination: {
    page: string;
    pages: string;
  };
  list: Manga[];
  profile: {
    id: number;
    username: string;
    email: string;
    deleted: boolean;
    created_at: string;
    profile_image_url: string | null;
  };
  auth_token: string;
}

export interface _GetProfileArgs {
  auth_token: string;
  email: string;
  keywords: string;
  page: string;
}

export interface _RemoveItemFromListArgs { slug: string; email: string, auth_token: string }
