import React from 'react';

import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';

import './cluster-layout.scss';

interface ClusterLayoutProps {
  space?: string;
  justifyContent?: string;
  alignItems?: string;
  className?: string;
}

export const ClusterLayout: ExtendedReactFunctionalComponent<ClusterLayoutProps> = ({
  children,
  alignItems = 'initial',
  justifyContent = 'initial',
  className,
  space = '1rem',
  ...rest
}) => (
  <div
    className={`cluster-layout ${className ?? ''}`}
    style={
      {
        '--space': space,
        '--justify-content': justifyContent,
        '--align-items': alignItems,
      } as CustomCssVariables
    }
    {...rest}
  >
    {children}
  </div>
);
