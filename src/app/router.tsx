import FavoritesPage from "@/pages/favorites";
import ProductsPage from "@/pages/products";
import RootLayout from "@/shared/layouts/root-layout";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ProductsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}
