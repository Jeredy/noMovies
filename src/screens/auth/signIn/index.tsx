import React, { useMemo, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import EyeOpen from "../../../assets/icons/eye-open.svg";
import EyeClosed from "../../../assets/icons/eye-closed.svg";

import {
	Container,
	LabelText,
	InputContainer,
	//   ChevronDownSvg,
	//   ChevronUpSvg,
	ForgotPasswordContainer,
	ForgotPasswordText,
	ForgotPassawordButton,
	ForgotPasswordButtonText,
	ButtonContainer,
	LogoImage,
} from "./styles";
import { ww } from "../../../styles/responsive";
import { useNavigation } from "@react-navigation/native";
import { formValues } from "./formValues";
import Colors from "../../../styles/colors";
import { Controller, useForm } from "react-hook-form";
import { ISignIn } from "../../../shared/interfaces/auth";
import { signInSchema } from "../../../shared/schemas/signIn";
import { AuthContext } from "../../../contexts/authContext";
import ShadowComponent from "../../../components/Shadow";

const SignInForm: React.FC = () => {
	const { navigate } = useNavigation();
	const { setAuthenticated } = React.useContext(AuthContext);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ISignIn>({
		resolver: yupResolver(signInSchema),
	});

	const [password, setPassword] = useState("");

	const onSubmit = (data: any) => {
		console.log(data);
		setAuthenticated?.(true);
	};

	const isValid = useMemo(() => {
		if (!password) return false;

		return true;
	}, [password]);

	return (
		<Container>
			<LogoImage source={require("../../../assets/images/logo.png")} />
			<LabelText>Faça o seu login e explore esses recursos!</LabelText>

			{formValues.map((item) => (
				<InputContainer key={item.name}>
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						name={item.name}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder={item.placeholder}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								error={errors[item.name]}
							/>
						)}
					/>
				</InputContainer>
			))}
			<ForgotPasswordContainer>
				<ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
				<ForgotPassawordButton
					hitSlop={{ top: ww(5), right: ww(5), bottom: ww(5), left: ww(5) }}
				>
					<ForgotPasswordButtonText>Clique aqui.</ForgotPasswordButtonText>
				</ForgotPassawordButton>
			</ForgotPasswordContainer>
			<ButtonContainer>
				<ShadowComponent shadowColor={Colors.colors.primary!}>
					<Button
						title="Entrar"
						disabled={false}
						onPress={handleSubmit(onSubmit)}
					/>
				</ShadowComponent>
			</ButtonContainer>

			<ButtonContainer>
				<ShadowComponent>
					<Button
						title="Criar uma conta!"
						type="ghost"
						onPress={() => navigate("SignUp")}
					/>
				</ShadowComponent>
			</ButtonContainer>
		</Container>
	);
};

export default SignInForm;
