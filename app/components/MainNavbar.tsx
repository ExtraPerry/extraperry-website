import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import LoginAuth from "@/app/components/LoginAuth";

const MainNavbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Navbar>
          <NavbarBrand>
            <Link href="/">
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/PerryIcon.png"
                  alt="PerryIcon"
                  width={42}
                  height={42}
                />
                <h1 className="text-black p-1 font-bold">PerryWeb</h1>
              </div>
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem className="text-black outline rounded">
              <Link
                href="/"
                className="flex align-middle items-center gap-4 border-1 rounded border-white p-2"
              >
                <h1>Home</h1>
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>
              {session && session?.user ? (
                <>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirectTo: "/" });
                    }}
                  >
                    <button type="submit">Logout</button>
                  </form>

                  <Link href="#">
                    <span>{session?.user?.name}</span>
                  </Link>
                </>
              ) : (
                <>
                  <form
                    action={async () => {
                      "use server";
                      await signIn("github");
                    }}
                  >
                    <button type="submit">Login</button>
                  </form>
                </>
              )}
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </nav>
    </header>
  );
};
export default MainNavbar;
