import { IProduct } from "@/entities/products/model";

import { FaRegHeart, FaHeart } from "react-icons/fa";

import styles from "./product-card.module.scss";
import classNames from "classnames";
import { useAppDispatch } from "@/app/hooks";
import {
  addProduct,
  removeProduct,
} from "@/features/favorites/model/favoritesSlice";

interface Props {
  product: IProduct;
  isFavorite: boolean;
}

export default function ProductCard({ product, isFavorite = false }: Props) {
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeProduct(product.id));

      return;
    }

    dispatch(addProduct(product));
  };

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-image-wrapper"]}>
        <img src={product.image} className={styles["product-image"]} />
        <div
          onClick={handleFavoriteClick}
          className={classNames(
            styles["favorite-icon"],
            isFavorite ? styles["active"] : ""
          )}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
      <div className={styles["product-info"]}>
        <h4 className={styles["product-title"]}>{product.name}</h4>
        <p className={styles["product-category"]}>{product.category}</p>
        <p className={styles["product-description"]}>{product.description}</p>
        <p className={styles["product-price"]}>{product.price} сом</p>
      </div>
    </div>
  );
}
