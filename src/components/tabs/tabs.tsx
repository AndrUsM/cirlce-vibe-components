import React from 'react';
import classNames from "classnames";

import { ExtendedReactFunctionalComponent } from "src/types";
import { CenteredVertialLayout, StackLayout } from '../layout';
import { HorizontalDivider } from '../horizontal-divider';


export interface TabsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Tabs: ExtendedReactFunctionalComponent<TabsProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <StackLayout space="0.25rem">
      <CenteredVertialLayout
        space="0.25rem"
        className={classNames("rounded-2", className)}
        {...rest}
      >
        {children}
      </CenteredVertialLayout>

      <HorizontalDivider color="var(--cv-secondary)" height="3px" />
    </StackLayout>
  );
};
