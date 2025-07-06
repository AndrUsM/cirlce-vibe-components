import React from 'react';
import { noop } from 'src/constants';

export interface MenuContextApi {
  closeMenu?: VoidFunction;
}

export const MenuContext = React.createContext<MenuContextApi>({
  closeMenu: noop,
});
