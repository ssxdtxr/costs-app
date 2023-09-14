import {FC, ReactNode} from 'react';
import styles from "./Button.module.scss";

interface IButton {
  onClick?: () => void
  children: ReactNode
}

export const Button: FC<IButton> = ({onClick, children}) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};