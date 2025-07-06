import React from 'react';

import { FloatingOverlay, FloatingPortal } from '@floating-ui/react';
import classNames from 'classnames';

import { ExtendedReactFunctionalComponent } from 'src/types';

import './dropdown-portal.scss';

interface DropdownPortalProps {
  useOverlayDarkenBackground?: boolean;
}

export const DropdownPortal: ExtendedReactFunctionalComponent<DropdownPortalProps> = ({
  children,
  useOverlayDarkenBackground = false,
}) => {
  return (
    <FloatingPortal>
      <FloatingOverlay
        className={classNames({
          'floating-overlay': useOverlayDarkenBackground,
        })}
        lockScroll
      />

      {children}
    </FloatingPortal>
  );
};
