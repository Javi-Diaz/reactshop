import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
