"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import Socials from "./footer/socials";
import WaitList from "./home/waitlist";
import { useState } from "react";
import Stores from "./stores";
import free_price from "../../public/free_price.png";

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
    <footer className="py-16 w-full bg-black left-0 bottom-0 right-0">
      <div className="w-5/6 mx-auto">
        <div className="grid md:grid-cols-2 my-4 text-white">
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
                          onClick={(e) => handleClick(e, link.label)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
          <WaitList
            className={"md:w-full mx-auto *:text-left *:text-[#CEC9BC]"}
            mainTextClassName={"text-xl"}
            subtextClassName={"text-sm mb-4"}
            FormclassName={
              "flex flex-wrap justify-start md:flex-nowrap gap-4 border mx-auto border-[#CEC9BC] p-2 rounded-lg"
            }
          />
        </div>
        <div>
          <hr className="text-gray-200" />
          <div className="md:flex items-center justify-between text-[#CEC9BC]">
            <Socials className="flex gap-4 my-4" />
            <div className="my-4 md:flex justify-between text-white gap-16">
              <p>© 2025 Copyright. All rights reserved.</p>
              <div className="flex gap-2 ">
                <Link href={"privacy-policy"}>Privacy Policy</Link>
                <Link href={"terms-of-use"}>Terms of Service</Link>
                <Link href={"eula"}>EULA</Link>
              </div>
            </div>
          </div>
        </div>
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
    </footer>
  );
}
