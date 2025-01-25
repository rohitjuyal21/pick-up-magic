import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="z-10 mb-10 flex w-full items-start justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 md:h-12 md:w-12">
          <Image src="/logo.png" alt="logo" width={48} height={48} />
        </div>
        <span className="font-satisfy text-lg font-semibold md:text-xl">
          Pick Up <span className="text-rose-500">Magic</span>
        </span>
      </Link>
      <Link
        href="https://github.com/rohitjuyal21/pick-up-magic"
        target="_blank"
        rel="noopener noreferrer"
        className="font-satisfy text-2xl font-semibold hover:text-rose-500"
      >
        <GithubLogo />
      </Link>
    </div>
  );
}
