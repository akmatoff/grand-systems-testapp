import { useProductsList } from "@/entities/products/api/queries";

import { useSearchParams } from "react-router-dom";
import Categories from "@/widgets/categories";
import { useMediaQuery } from "react-responsive";

import styles from "./products.module.scss";
import ProductsList from "@/widgets/products-list";
import SearchBar from "@/widgets/search-bar";
import CategoriesMobile from "@/widgets/categories-mobile";

export default function ProductsPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [searchParams] = useSearchParams();

  const { products, isProductsLoading } = useProductsList({
    search: searchParams.get("search") ?? undefined,
    category: searchParams.get("category") ?? undefined,
  });

  return (
    <section className={styles["products-section"]}>
      <h1>Главная</h1>
      <div className={styles["header"]}>
        <SearchBar placeholder="Поиск продукта..." />

        {isMobile && <CategoriesMobile />}
      </div>

      {!isMobile && <Categories />}

      <ProductsList products={products || []} isLoading={isProductsLoading} />
    </section>
  );
}
