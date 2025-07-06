import React from "react";

import { useFormikContext } from "formik";

import { ButtonProps } from "src/components/button";
import { ExtendedReactFunctionalComponent } from "src/types";
import { SubmitButton, SubmitButtonProps } from "src/components/submit-button";

export type FormSubmitButton = Omit<ButtonProps, 'type'>;

export const FormSubmitButton: ExtendedReactFunctionalComponent<SubmitButtonProps> = ({ children, ...props }) => {
	const { isSubmitting } = useFormikContext();

	return <SubmitButton disabled={isSubmitting} {...props}>{children}</SubmitButton>;
}