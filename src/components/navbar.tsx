import { HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-zinc-800">
      <div className="mx-auto flex w-full max-w-7xl items-center px-4 py-2">
        <section className="flex gap-2">
          <Image src="/nsf.gif" alt="logo" width={50} height={50} />
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </section>

        <ul className="flex gap-4 pl-8 text-zinc-400">
          <li>
            <Link href="https://csdt.org/projects">Projects</Link>
          </li>
          <li>
            <Link href="https://csdt.org/news">News</Link>
          </li>
          <li>
            <Link href="https://csdt.org/publications">Publications</Link>
          </li>
          <li>
            <Link href="https://csdt.org/about">About</Link>
          </li>
          <li>
            <Link href="https://csdt.org/getting-started">Getting Started</Link>
          </li>
        </ul>
        <Link
          href="https://csdt.org/culture/help/index.html"
          className="ml-auto  text-zinc-400"
        >
          <Button variant={"ghost"} size={"icon"}>
            <HelpCircle />
          </Button>
        </Link>
      </div>
    </nav>
  );
};
