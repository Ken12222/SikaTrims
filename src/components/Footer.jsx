"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Socials from "./footer/page";

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
    href: "/help-resource",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="py-16 w-full bg-black left-0 bottom-0 right-0">
      <div className="w-5/6 mx-auto">
        <div className="grid md:grid-cols-3 my-4 text-white">
          <div className="grid md:grid-cols-2">
            <div className="mb-8">
              <Link href={"/"}>
                <Image src={logo} width={100} height={100} alt="logo" />
              </Link>
            </div>
            <div>
              <p className="mb-4">
                <strong>Quick Links</strong>
              </p>
              <nav>
                <ul className="grid grid-cols gap-2 mb-4">
                  {navlinks &&
                    navlinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          className="text-[#CEC9BC] hover:text-[#2C2C2C] transition-300 ease-in-out"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
          <div>
            <p>
              <strong>Early Access</strong>
            </p>
            <p className="mb-4 text-[#CEC9BC]">
              Designed for barbers and shop owners who want to stay digital,
              stay booked, and stay ahead
            </p>
            <form action="" className="flex gap-2">
              <Input
                type={"text"}
                placeholder="Enter your Email"
                className={"outline-[#CEC9BC]"}
              />
              <Button className={"bg-[#2C2C2C] text-[#CEC9BC]"} type="submit">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
        <div>
          <hr className="text-gray-200" />
          <div className="md:flex items-center justify-between text-[#CEC9BC]">
            <Socials className="flex gap-4 my-4" />
            <div className="my-4 md:flex text-white gap-4">
              <p>© 2025 Copyright. All rights reserved.</p>
              <Link href={"privacy-policy"} className="mx-4">
                Privacy Policy
              </Link>
              <Link href={"terms-of-use"}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
