import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

import styles from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles["header"]}>
      <Link to="/" className={styles["logo"]}>
        Grand Systems <span>Shop</span>
      </Link>

      <div className={styles["nav-items"]}>
        <Link
          to="/"
          className={classNames(
            styles["nav-item"],
            pathname === "/" ? styles["active"] : ""
          )}
        >
          <GoHomeFill />
        </Link>
        <Link
          to="/favorites"
          className={classNames(
            styles["nav-item"],
            pathname.includes("/favorites") ? styles["active"] : ""
          )}
        >
          <FaHeart className={styles["icon"]} />
        </Link>
      </div>
    </header>
  );
}
