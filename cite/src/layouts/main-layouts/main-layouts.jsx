import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayouts = () => {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
