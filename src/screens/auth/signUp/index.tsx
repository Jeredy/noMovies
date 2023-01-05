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
import { ww } from "../../../shared/styles/responsive";
import { useNavigation } from "@react-navigation/native";
import { formValues } from "./formValues";
import Colors from "../../../shared/styles/colors";
import { Controller, useForm } from "react-hook-form";
import { ISignUp } from "../../../shared/interfaces/auth";
import { signUpSchema } from "../../../shared/schemas/signUp";
import ShadowComponent from "../../../components/Shadow";

const SignUpForm: React.FC = () => {
	const { navigate, goBack } = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ISignUp>({
		resolver: yupResolver(signUpSchema),
	});

	const [password, setPassword] = useState("");

	const onSubmit = (data: any) => goBack();

	const isValid = useMemo(() => {
		if (!password) return false;

		return true;
	}, [password]);

	return (
		<Container>
			<LogoImage source={require("../../../assets/images/logo.png")} />
			<LabelText>
				Junto podemos selecionar os melhores filmes para a nossa lista.
			</LabelText>

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
				<ForgotPasswordText>{"Já tem uma conta? "}</ForgotPasswordText>
				<ForgotPassawordButton
					onPress={() => navigate("SignIn")}
					hitSlop={{ top: ww(5), right: ww(5), bottom: ww(5), left: ww(5) }}
				>
					<ForgotPasswordButtonText>Clique aqui.</ForgotPasswordButtonText>
				</ForgotPassawordButton>
			</ForgotPasswordContainer>
			<ButtonContainer>
				<ShadowComponent shadowColor={Colors.colors.primary!}>
					<Button
						title="Cadastrar"
						disabled={false}
						onPress={handleSubmit(onSubmit)}
					/>
				</ShadowComponent>
			</ButtonContainer>
		</Container>
	);
};

export default SignUpForm;
