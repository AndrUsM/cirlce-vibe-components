import React from "react";

import {
	Button,
	ButtonProps
} from "../button";
import { ExtendedReactFunctionalComponent } from "src/types";

export type SubmitButtonProps = Omit<ButtonProps, 'type'>;

export const SubmitButton: ExtendedReactFunctionalComponent<SubmitButtonProps> = ({ children, ...props }) => {
	return <Button type="submit" {...props}>{children}</Button>;
}