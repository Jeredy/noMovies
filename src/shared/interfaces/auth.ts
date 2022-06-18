import { IUser } from "./user";

export interface ISignIn {
	username: string;
	password: string;
}

export interface ISignUp {
	username: string;
	email: string;
	password: string;
}

export interface IAuth {
	token: string;
	user: IUser;
}
