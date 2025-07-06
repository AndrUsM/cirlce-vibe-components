
import React from 'react';

import { StackLayout } from "src/components/layout";
import { ExtendedReactFunctionalComponent } from "src/types";

export const FormControl: ExtendedReactFunctionalComponent = ({ children, ...rest }) => {
  return (
    <StackLayout space="0.25rem" {...rest}>{children}</StackLayout>
  )
}