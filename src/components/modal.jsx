"use client";
import ggstore from "../../public/ggstore.png";
import astore from "../../public/astore.png";
import free_price from "../../public/free_price.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import WaitList from "./home/waitlist";

export default function Modal() {
  const [openModal, setOpenMadal] = useState(true);

  useEffect(() => {
    const status = window.localStorage.getItem("modalStatus");
    if (status !== null) setOpenMadal(JSON.parse(status));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("modalStatus", JSON.stringify(openModal));
  }, [openModal]);

  return (
    <>
      {openModal && (
        <div className="[&>div]:m-4 fixed inset-0 z-100 w-full h-screen backdrop-blur-sm bg-black/50 text-white flex justify-center items-center">
          <div className=" bg-[#2C2C2C] [&_p:last-child]:text-2xl text-[#2C2C2C] py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6  text-[#CEC9BC] mt-4"
              onClick={() => setOpenMadal(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <WaitList
              className={
                "md:w-full mx-auto my-16 *:text-center *:text-[#CEC9BC]"
              }
              mainTextClassName={"text-4xl"}
              subtextClassName={"text-base mb-4 p-4"}
              FormclassName={
                "flex flex-wrap md:flex-nowrap gap-4 border md:w-4/5 mx-auto border-[#CEC9BC] p-4 rounded-lg"
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
