import React from 'react';
import classNames from 'classnames';

import { BUTTON_COLOR_TO_STYLES_MAP, BUTTON_SIZE_TO_STYLES_MAP } from './constants';
import { ButtonBorderRadius, ButtonColor, ButtonSize } from './types';
import { ExtendedReactFunctionalComponent } from 'src/types';
import { composeButtonBorderRadius } from './utils';

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'color' | 'size'
  > {
  size?: ButtonSize;
  borderRadius?: ButtonBorderRadius;
  color?: ButtonColor;
}

export const Button: ExtendedReactFunctionalComponent<ButtonProps> = ({
  color = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}) => {
  const { disabled } = props;

  const sizes = BUTTON_SIZE_TO_STYLES_MAP[size];
  const colors = BUTTON_COLOR_TO_STYLES_MAP[disabled ? 'disabled' : color];
  const effectClassNames = disabled ? 'cursor-not-allowed' : 'cursor-pointer element_effect-hover';
  const borderRadiusClassNames = composeButtonBorderRadius(props?.borderRadius);

  return (
    <button
      type='button'
      className={classNames(
        `cursor-pointer border-none p-2 text-center ${sizes} ${colors} ${effectClassNames} ${borderRadiusClassNames}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
