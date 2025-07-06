import React from "react";
import classNames from "classnames";
import { Placement } from "@floating-ui/react";

import { MenuButtonProps } from "./types";
import { MenuContext } from "./menu.context";
import { useDropdown } from "src/hooks";
import { Dropdown } from "../dropdown";
import { ExtendedReactFunctionalComponent } from "src/types";

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly button: (props: MenuButtonProps) => React.ReactNode;
  readonly isOpen?: boolean;
  readonly fullDropdownWidth?: boolean;
  readonly onOpenChange?: (open: boolean) => void;
  readonly dropdownPlacement?: Placement;
  readonly zIndex?: number;
  readonly strategy?: "fixed" | "absolute";
}

export const Menu: ExtendedReactFunctionalComponent<DropdownMenuProps> = ({
  button,
  isOpen,
  fullDropdownWidth = false,
  onOpenChange,
  dropdownPlacement = "bottom-end",
  zIndex = 10,
  strategy = "absolute",
  children,
  ...divAttributes
}) => {
  const { referenceProps, open, contentProps, setStatus, transitionStyles } =
    useDropdown({
      ...(isOpen !== undefined && onOpenChange
        ? { open: isOpen, onOpenChange }
        : {}),
    });

  const closeMenu = () => {
    if (!onOpenChange) {
      return;
    }

    setStatus(false);
  };

  return (
    <MenuContext.Provider value={{ closeMenu }}>
      <div
        className={classNames("relative", ...(divAttributes?.className ?? ""))}
        {...divAttributes}
      >
        <div className="cursor-pointer" {...referenceProps}>
          {button({
            active: open,
          })}
        </div>

        <Dropdown
          open={open}
          dropdownProps={contentProps}
          transitionStyles={transitionStyles}
          zIndex={zIndex}
          fullDropdownWidth={fullDropdownWidth}
        >
          {children}
        </Dropdown>
      </div>
    </MenuContext.Provider>
  );
};
