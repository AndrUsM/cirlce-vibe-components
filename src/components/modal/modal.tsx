import React, { useEffect } from "react";

import { CustomCssVariables, ExtendedReactFunctionalComponent } from "src/types";

import './modal.scss';

export interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  minWidth?: string;
}

export const Modal: ExtendedReactFunctionalComponent<ModalProps> = ({
  onClose,
  isOpen,
  minWidth,
  children,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          "--modal-min-width": minWidth,
        } as CustomCssVariables}
      >
        {children}
      </div>
    </div>
  );
};
