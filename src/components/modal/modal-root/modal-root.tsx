import React, { useEffect } from 'react';

import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';
import { Show } from 'src/components/show';

import './modal-root.scss';

export interface ModalRootProps {
  onClose: () => void;
  isOpen: boolean;
  showInlineCloseButton?: boolean;
  minWidth?: string;
}

export const ModalRoot: ExtendedReactFunctionalComponent<ModalRootProps> = ({
  onClose,
  isOpen,
  minWidth,
  showInlineCloseButton = false,
  children,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={
          {
            '--modal-min-width': minWidth,
          } as CustomCssVariables
        }
      >
        <Show.When isTrue={showInlineCloseButton}>
          <button className="modal-close modal-close-inline" onClick={onClose}>
            ×
          </button>
        </Show.When>

        {children}
      </div>
    </div>
  );
};
