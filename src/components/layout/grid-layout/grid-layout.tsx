import React from "react";
import classNames from "classnames";

import { CustomCssVariables, ExtendedReactFunctionalComponent } from "src/types";

import "./grid-layout.scss";

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: string;
  space?: string;
}

export const GridLayout: ExtendedReactFunctionalComponent<GridLayoutProps> = ({
  minWidth = "150px",
  space = "1rem",
  children,
  className = "",
}) => {
  return (
    <div className={classNames("grid-layout", className)} style={{
      '--grid-layout-space': space,
      '--grid-layout-min-width': minWidth
    } as CustomCssVariables}>
      {children}
    </div>
  );
};
