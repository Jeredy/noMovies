import { errorMessages } from "../../messages/errorMessages";
import * as Yup from "yup";

const { USERNAME, PASSWORD } = errorMessages.SIGN_IN;

export const signInSchema = Yup.object().shape({
	username: Yup.string().required(USERNAME.IS_REQUIRED),
	password: Yup.string()
		.required(PASSWORD.IS_REQUIRED)
		.min(6, PASSWORD.IS_LENGTH),
});
