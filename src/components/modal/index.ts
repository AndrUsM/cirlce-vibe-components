import { ModalBody } from "./modal-body";
import { ModalHeader } from "./modal-header";
import { ModalFooter } from "./modal-footer";
import { ModalRoot } from "./modal-root";

import { ModalComponentComposition } from "./types";

const ModalComposedComponent: ModalComponentComposition = {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Root: ModalRoot,
}

export { ModalComposedComponent as Modal };
export type { ModalComponentComposition };
