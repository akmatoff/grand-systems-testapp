import classNames from "classnames";
import styles from "./drawer.module.scss";
import { ReactNode } from "react";

import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  title: string;
}

export default function Drawer({ isOpen, children, title, onClose }: Props) {
  return (
    <>
      {isOpen && <div className={styles["backdrop"]} onClick={onClose}></div>}
      <div
        className={classNames(styles["drawer"], isOpen ? styles["open"] : "")}
      >
        <div className={styles["header"]}>
          <h1>{title}</h1>
          <IoClose onClick={onClose} />
        </div>

        <div className={styles["content"]}>{children}</div>
      </div>
    </>
  );
}
