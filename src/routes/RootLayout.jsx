import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
} // Outlet/> is where actual nested route content should be rendered

export default RootLayout;
