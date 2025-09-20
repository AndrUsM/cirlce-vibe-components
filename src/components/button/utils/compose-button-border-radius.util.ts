import { ButtonBorderRadius } from "../types";

export const composeButtonBorderRadius = (borderRadius?: ButtonBorderRadius): string => {
  const { topLeft, topRight, bottomLeft, bottomRight } = borderRadius ?? {};

  if (!topLeft && !topRight && !bottomLeft && !bottomRight) {
    return 'rounded-1';
  }

  return [
    topLeft && 'rounded-tl-1',
    topRight && 'border-tr-1',
    bottomLeft && 'border-bl-1',
    bottomRight && 'border-br-1',
  ].filter(Boolean).join(' ');
}