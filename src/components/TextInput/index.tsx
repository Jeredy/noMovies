import React, { useCallback, useRef } from "react";
import { TextInput as TextInputRN, TextInputProps } from "react-native";
import { FieldError } from "react-hook-form";

import {
	CheckIcon,
	Container,
	ContentContainer,
	ErrorIcon,
	Input,
	Placeholder,
	ErrorMessage,
} from "./styles";

type Props = TextInputProps & {
	error?: FieldError | null;
	status?: "default" | "success" | "error" | "loading";
};

const TextInput: React.FC<Props> = (props) => {
	const { status, value, placeholder, children, error, ...rest } = props;

	const textInputRef = useRef<TextInputRN>(null);

	const renderIcon = useCallback(() => {
		/*eslint-disable*/
		switch (status) {
			case "default":
				return <CheckIcon fill="#DEE2E6" />;
			case "success":
				return <CheckIcon fill="#25D253" />;
			case "error":
				return <ErrorIcon />;
			case "loading":
				return <CheckIcon fill="#DEE2E6" />;
			default:
				return null;
		}
		/*eslint-enable*/
	}, [status]);

	return (
		<>
			<Container>
				<ContentContainer>
					{!!value && <Placeholder>{placeholder}</Placeholder>}
					<Input
						{...rest}
						ref={textInputRef as any}
						value={value}
						placeholder={placeholder}
						placeholderTextColor="#ADB5BD"
						onChange={rest.onChange}
					/>
				</ContentContainer>

				{children}
			</Container>
			{error && !!error.message && <ErrorMessage>{error.message}</ErrorMessage>}
		</>
	);
};

export default TextInput;
