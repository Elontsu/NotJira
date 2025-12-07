import { type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content} onClick={e => e.stopPropagation()}>{children}</div>
    </div>,
    document.body,
  );
}
