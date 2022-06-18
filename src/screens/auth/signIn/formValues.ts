import { ISignIn } from "../../../shared/interfaces/auth";

type FormValues = {
	name: keyof ISignIn;
	placeholder: string;
	type: string;
};

export const formValues: FormValues[] = [
	{
		name: "username",
		placeholder: "Username",
		type: "text",
	},
	{
		name: "password",
		placeholder: "Password",
		type: "text",
	},
];
