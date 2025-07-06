import React from 'react';

import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';

import './centered-vertial-layout.scss';

interface CenteredVertialLayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  space?: string;
  justifyContent?: string;
}

export const CenteredVertialLayout: ExtendedReactFunctionalComponent<CenteredVertialLayoutProps> = ({
  space = 'initial',
  justifyContent = 'initial',
  children,
  className,
  ...rest
}) => (
  <div
    className={`centered-vertical-layout ${className ?? ''}`}
    style={
      {
        '--space': space,
        '--justify-content': justifyContent,
      } as CustomCssVariables
    }
    {...rest}
  >
    {children}
  </div>
);
