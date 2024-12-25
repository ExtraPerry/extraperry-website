import React from "react";
import MainNavbar from "@/app/components/MainNavbar";
import { NextUIProvider } from "@nextui-org/system";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-calib">
      <NextUIProvider>
        <MainNavbar />
        {children}
      </NextUIProvider>
    </main>
  );
}
