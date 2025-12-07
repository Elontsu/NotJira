import type { PropsWithChildren } from "react";
import styles from "./stylex.module.css";

interface Props extends PropsWithChildren {
  onClick?: () => void,
}

export function Card({ children, onClick }: Props) {
  return (
    <div className={styles.card} onClick={onClick}>
      {children}
    </div>
  )
}
