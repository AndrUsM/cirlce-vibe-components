import React from 'react';

import { ModalRootProps } from '../modal-root/modal-root';
import { ModalBodyProps } from '../modal-body';
import { ModalFooterProps } from '../modal-footer';
import { ModalHeaderProps } from '../modal-header';

import { ExtendedReactFunctionalComponent } from 'src/types';

export interface ModalComponentComposition {
  Root: ExtendedReactFunctionalComponent<ModalRootProps>;
  Body: ExtendedReactFunctionalComponent<ModalBodyProps>;
  Header: ExtendedReactFunctionalComponent<ModalHeaderProps>;
  Footer: ExtendedReactFunctionalComponent<ModalFooterProps>;
}
