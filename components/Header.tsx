"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="" className="">
          <div className="flex items-center gap-3">
            <Image src={"logo.svg"} width={40} height={40} alt="Dog Coin" />
            <span className="font-bold text-lg">Dog Coin</span>
          </div>
        </Link>
        <nav>
          <Link
            href="/"
            className={cn("nav-link", {
              "is-active": pathname === "/",
              "is-home": true,
            })}
          >
            Home
          </Link>
          <p>Search Model</p>
          <Link
            href="/coins"
            className={cn("nav-link", {
              "is-active": pathname === "/coins",
            })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
