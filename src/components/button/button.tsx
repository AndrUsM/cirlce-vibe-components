import React from "react";

import {
	BUTTON_COLOR_TO_STYLES_MAP,
	BUTTON_SIZE_TO_STYLES_MAP
} from './constants';
import {
	ButtonColor,
	ButtonSize
} from './types';
import { ExtendedReactFunctionalComponent } from "src/types";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: ButtonSize;
	color?: ButtonColor;
}

export const Button: ExtendedReactFunctionalComponent<ButtonProps> = ({
	color = 'primary', size = 'medium', children, ...props
}) => {
	const { disabled } = props;

	const sizes = BUTTON_SIZE_TO_STYLES_MAP[size];
	const colors = BUTTON_COLOR_TO_STYLES_MAP[disabled ? 'disabled' : color];

	return <button className={`button-style-hover cursor-pointer border-none rounded-1  p-2 text-center ${sizes} ${colors}`} {...props}>{children}</button>;
}