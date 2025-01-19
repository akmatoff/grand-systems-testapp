import Header from "@/widgets/header";
import { Outlet } from "react-router-dom";
import Footer from "../ui/footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
