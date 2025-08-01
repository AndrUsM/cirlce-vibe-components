import React from "react";
import classNames from "classnames";

import { ExtendedReactFunctionalComponent } from "src/types";
import { CenteredVertialLayout } from "../centered-vertical-layout/centered-vertical-layout";


type IconLayoutAlign = "reverse" | "normal";

interface IconLayoutProps {
  space?: string;
  align?: IconLayoutAlign;
}

export const IconLayout: ExtendedReactFunctionalComponent<IconLayoutProps> = ({
  children,
  space = '0.25rem',
  align = 'normal',
}) => (
  <CenteredVertialLayout
    space={space}

    className={classNames({
      'flex-row-reverse': align === 'reverse',
      'flex-row': align === 'normal',
    })}
  >
    {children}
  </CenteredVertialLayout>
);
