import { ButtonColor } from "../types";

export const BUTTON_COLOR_TO_STYLES_MAP: Record<ButtonColor, string> = {
	disabled: 'bg-secondary text-light cursor-not-allowed button_state-disabled',
	primary: "bg-primary text-light",
	success: "bg-success text-dark",
	warning: "bg-warning text-dark",
	danger: "bg-danger text-light",
	secondary: "bg-secondary text-light",
}