import { IProduct } from "@/entities/products/model";
import ProductCard from "@/widgets/product-card/product-card";

import styles from "./products-list.module.scss";
import { useAppSelector } from "@/app/hooks";
import LoadingSpinner from "@/shared/ui/loading-spinner";

interface Props {
  products: IProduct[];
  isLoading: boolean;
}

export default function ProductsList({ products, isLoading }: Props) {
  const favoriteProducts = useAppSelector((state) => state.favorites.products);

  const isFavorite = (productId: number): boolean => {
    return favoriteProducts.some((product) => product.id === productId);
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      )}
      {!products.length && !isLoading && (
        <div className={styles["placeholder"]}>Продукты не найдены.</div>
      )}
      <div className={styles["products-list"]}>
        {products &&
          !isLoading &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
            />
          ))}
      </div>
    </>
  );
}
