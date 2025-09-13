import React from "react";

import CIcon from "@coreui/icons-react";
import classNames from "classnames";
import { CustomCssVariables } from "src/types";

import './icon.scss';

// https://coreui.io/icons/

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly name: any;
  readonly size?: number;
  readonly className?: string;
  readonly color?: string;
}

export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ name, color, size = 10, className, ...iconAttributes }, ref) => {
    return (
      <div ref={ref} className={classNames("cv-icon", className)}
      style={{
        '--cv-icon-size': `${size}px`
      } as CustomCssVariables} {...iconAttributes}>
        <CIcon
          icon={name}
          size={"custom-size"}
          height={size}
          width={size}
          color={color ?? "var(--cv-base)"}
        />
      </div>
    );
  }
);

Icon.displayName = "Icon";
