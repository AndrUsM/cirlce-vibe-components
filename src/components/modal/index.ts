import { ModalBody } from "./modal-body";
import { ModalHeader } from "./modal-header";
import { ModalFooter } from "./modal-footer";
import { Modal } from "./modal";

import { ModalComponent } from "./types";

(Modal as ModalComponent).Header = ModalHeader;
(Modal as ModalComponent).Body = ModalBody;
(Modal as ModalComponent).Footer = ModalFooter;

const ModalComposedComponent = Modal as ModalComponent;

export { ModalComposedComponent as Modal };
export type { ModalComponent };
