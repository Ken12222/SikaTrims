"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Help & Resource",
      href: "/help_resource",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="fixed inset-x-0">
      <div className="hidden w-5/6 mx-auto mt-8  md:flex justify-between items-center backdrop-blur-sm bg-white/30  rounded-lg p-6">
        <Link href={"/"}>
          <Image alt="sikatrims_logo" src={logo} width={100} height={100} />
        </Link>
        <nav className="">
          <ul className="flex gap-6">
            {navlinks &&
              navlinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-[#CEC9BC]" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <Button type="submit" className={"bg-black"}>
          Download
        </Button>
      </div>
      <div>
        <div className="md:hidden w-full mx-auto flex justify-between items-center backdrop-blur-sm bg-white/30 p-6">
          <Link href={"/"}>
            <Image alt="sikatrims_logo" src={logo} width={100} height={100} />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-[#CEC9BC]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="w-full absolute z-10 p-4 bg-[#2C2C2C] text-[#CEC9BC] text-base">
            <nav>
              <ul className="grid grid-cols gap-6 ">
                {navlinks &&
                  navlinks.map((link) => (
                    <li key={link.href}>
                      <Link className="text-[#CEC9BC]" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
            <button className="mt-4">Download</button>
          </div>
        )}
      </div>
    </header>
  );
}
