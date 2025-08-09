import React from "react";

import { ModalProps } from "../modal";
import { ModalBodyProps } from "../modal-body";
import { ModalFooterProps } from "../modal-footer";
import { ModalHeaderProps } from "../modal-header";

import { ExtendedReactFunctionalComponent } from "src/types";

export interface ModalComponent extends ExtendedReactFunctionalComponent<ModalProps> {
  Body: ExtendedReactFunctionalComponent<ModalBodyProps>;
  Header: ExtendedReactFunctionalComponent<ModalHeaderProps>;
  Footer: ExtendedReactFunctionalComponent<ModalFooterProps>;
}
