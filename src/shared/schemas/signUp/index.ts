import { errorMessages } from "../../messages/errorMessages";
import * as Yup from "yup";

const { USERNAME, PASSWORD, EMAIL } = errorMessages.SIGN_UP;

export const signUpSchema = Yup.object().shape({
	username: Yup.string().required(USERNAME.IS_REQUIRED),
	email: Yup.string().required(EMAIL.IS_REQUIRED).email(EMAIL.IS_INVALID),
	password: Yup.string()
		.required(PASSWORD.IS_REQUIRED)
		.min(6, PASSWORD.IS_LENGTH),
});
