import { ISignUp } from "../../../shared/interfaces/auth";

type FormValues = {
	name: keyof ISignUp;
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
		name: "email",
		placeholder: "E-mail",
		type: "text",
	},
	{
		name: "password",
		placeholder: "Password",
		type: "text",
	},
];
