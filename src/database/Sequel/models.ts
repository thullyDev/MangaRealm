export interface _DBUser {
  id: number;
  username: string;
  email: string;
  password: string;
  deleted: boolean;
  created_at: Date;
  profile_image_url: null | string;
  token: string;
}
