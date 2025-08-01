import React from "react";

import { TabsButtonProps } from "../tab-button";
import { TabsProps } from "../tabs";
import { ExtendedReactFunctionalComponent } from "src/types";

export interface TabComponent extends React.FC<TabsProps> {
  Button: ExtendedReactFunctionalComponent<TabsButtonProps>;
}
