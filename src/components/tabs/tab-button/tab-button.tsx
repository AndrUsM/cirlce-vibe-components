import React from 'react';

import { Button } from "src/components/button";
import { ButtonColor } from 'src/components/button/types';
import { ExtendedReactFunctionalComponent } from "src/types";

export interface TabsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const TabsButton: ExtendedReactFunctionalComponent<TabsButtonProps> = ({
  children,
  disabled,
  active,
  ...rest
}) => {
  const color: ButtonColor = active && !disabled ? "primary" : "secondary";

  return (
    <Button {...rest} color={color} >
      {children}
    </Button>
  );
};
