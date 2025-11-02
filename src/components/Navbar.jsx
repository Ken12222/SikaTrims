"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import ggstore from "../../public/ggstore.png";
import astore from "../../public/astore.png";
import free_price from "../../public/free_price.png";
import Stores from "./stores";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

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

  const [openModal, setOpenModal] = useState(false);

  //handle pricing_page modal
  async function handleClick(e, linkName) {
    if (linkName === "Pricing") {
      e.preventDefault();
      setOpenModal(!openModal);
    } else {
      setOpenModal(false);
    }
  }

  function handleCloseModal(e) {
    e.preventDefault();
    setOpenModal(false);
  }

  return (
    <header className="fixed inset-x-0">
      <div className="hidden w-5/6 mx-auto mt-8  md:flex justify-between items-center backdrop-blur-sm bg-white/30  rounded-lg p-6">
        <Link href={"/"}>
          <Image alt="sikatrim_logo" src={logo} width={100} height={100} />
        </Link>

        <nav className="">
          <ul className="flex gap-6">
            {navlinks &&
              navlinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-[#CEC9BC] hover:text-[#2C2C2C] transition-300 ease-in-out"
                    href={link.href}
                    onClick={(e) => handleClick(e, link.label)}
                  >
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
            <Image alt="Sikatrim_logo" src={logo} width={100} height={100} />
          </Link>
          {isOpen && isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#CEC9BC]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </div>
        {isOpen && (
          <div className="md:hidden w-full absolute z-10 p-4 bg-[#2C2C2C] text-[#CEC9BC] text-base">
            <nav>
              <ul className="grid grid-cols gap-6 ">
                {navlinks &&
                  navlinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        onClick={(e) => handleClick(e, link.label)}
                        className="text-[#CEC9BC]"
                        href={link.href}
                      >
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
      {/* Modal for Pricing page */}
      {openModal && (
        <div className="[&>div]:m-4 absolute inset-0 z-100 w-full h-screen backdrop-blur-sm bg-black/50 text-white flex justify-center items-center">
          <div
            style={{
              background:
                "linear-gradient(90deg, rgb(161, 157, 147), rgb(206, 201, 188)",
            }}
            className="grid md:grid-cols-2 gap-4 items-center "
          >
            <div className=" [&_p:last-child]:text-2xl text-[#2C2C2C] *:my-4 *:mx-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                onClick={(e) => handleCloseModal(e)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>

              <p className="font-bold text-4xl">Sign up For Free Today</p>
              <p className="">
                Grow your barbershop or studio with tools that keep you sharp
              </p>

              <div className="relative flex gap-2">
                <Stores />
              </div>
            </div>
            <div className="relative w-full h-100 inset-0">
              <Image
                src={free_price}
                fill={true}
                alt="free use image"
                className="object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
