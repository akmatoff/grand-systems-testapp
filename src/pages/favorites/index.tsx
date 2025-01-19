import { useAppSelector } from "@/app/hooks";
import ProductsList from "@/widgets/products-list";

export default function FavoritesPage() {
  const favoriteProducts = useAppSelector((state) => state.favorites.products);

  return (
    <section>
      <h1>Избранное</h1>

      <ProductsList products={favoriteProducts} isLoading={false} />
    </section>
  );
}
