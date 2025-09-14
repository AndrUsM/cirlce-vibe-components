import React, { HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';

import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';

import './horizontal-divider.scss';

interface HorizontalDividerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  readonly height?: string;
  readonly color?: string;
}

export const HorizontalDivider: ExtendedReactFunctionalComponent<HorizontalDividerProps> = ({
  height = '1px',
  color = 'var(--cv-secondary)',
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames('horizontal-divider', className)}
      style={
        {
          '--cs-divider-color': color,
          '--cs-divider-height': height,
        } as CustomCssVariables
      }
      {...rest}
    />
  );
};
