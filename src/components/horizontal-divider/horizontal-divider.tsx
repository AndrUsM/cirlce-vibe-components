import React from 'react';

import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';
import './horizontal-divider.scss';

interface HorizontalDividerProps {
  readonly height?: string;
  readonly color?: string;
}

export const HorizontalDivider: ExtendedReactFunctionalComponent<HorizontalDividerProps> = ({
  height = '1px',
  color = 'var(--cv-secondary)',
}) => {
  return (
    <div
      className="horizontal-divider"
      style={
        {
          '--cs-divider-color': color,
          '--cs-divider-height': height,
        } as CustomCssVariables
      }
    />
  );
};
