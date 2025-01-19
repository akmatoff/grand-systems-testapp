import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { getFavoritesFromLocalStorage } from "@/shared/utils";
import { useAppDispatch } from "./hooks";
import { setProducts } from "@/features/favorites/model/favoritesSlice";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 15 * 1000,
    },
  },
});

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favorites = getFavoritesFromLocalStorage();

    dispatch(setProducts(favorites));
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
