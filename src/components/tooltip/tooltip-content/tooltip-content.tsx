import React, { CSSProperties } from "react";

import { FloatingPortal } from "@floating-ui/react";
import { ExtendedReactFunctionalComponent } from "src/types";

import './tooltip-content.scss';

interface TooltipProps {
  readonly open?: boolean;
  readonly transitionStyles: CSSProperties;
  readonly tooltipProps?: Record<string, unknown>;
}

export const TooltipContent: ExtendedReactFunctionalComponent<TooltipProps> = ({
  open,
  children,
  tooltipProps,
  transitionStyles,
  ...props
}) => {
  if (!open) {
    return null;
  }

  return (
    <FloatingPortal>
      <div
        className="bg-light text-default p-2 w-max rounded-1 text-xs tooltip-content"
        style={transitionStyles}
        {...props}
        {...tooltipProps}
      >
        {children}
      </div>
    </FloatingPortal>
  );
};
