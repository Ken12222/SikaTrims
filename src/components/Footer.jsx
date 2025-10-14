"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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

const socials = [
  {
    icon: "Home",
    href: "/",
  },
  {
    icon: "Home",
    href: "/",
  },
  {
    icon: "Home",
    href: "/",
  },
  {
    icon: "Home",
    href: "/",
  },
];

export default function Footer() {
  return (
    <footer className="py-16 w-full bg-black">
      <div className="w-5/6 mx-auto">
        <div className="grid md:grid-cols-3 my-4 text-white">
          <div className="grid md:grid-cols-2">
            <div className="mb-8">
              <Image src={logo} width={100} height={100} alt="logo" />
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
                        <Link className="text-[#CEC9BC]" href={link.href}>
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
              <strong>Subscribe</strong>
            </p>
            <p className="mb-4 text-[#CEC9BC]">
              Join our newsletter to stay updated on new features and special
              promotions.
            </p>
            <div className="flex gap-2">
              <Input
                type={"text"}
                placeholder="Enter your Email"
                className={"outline-[#CEC9BC]"}
              />
              <Button className={"bg-[#2C2C2C] text-[#CEC9BC]"} type="submit">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="flex items-center justify-between text-[#CEC9BC]">
            <div className="my-4 md:flex text-white gap-4">
              <p>© 2024 Copyright. All rights reserved.</p>
              <Link href={"privacy_policy"} className="mx-4">
                Privacy Policy
              </Link>
              <Link href={"privacy_policy"}>Terms of Service</Link>
            </div>
            <div className="md:flex gap-4">
              <Link href={"/"}>Facebook</Link>
              <Link href={"/"}>x</Link>
              <Link href={"/"}>Instagram</Link>
              <Link href={"/"}>Linkedin</Link>
              <Link href={"/"}>Youtube</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
