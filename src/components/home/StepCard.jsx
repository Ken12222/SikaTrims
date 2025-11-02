"use client";
import ggstore from "../../../public/ggstore.png";
import astore from "../../../public/astore.png";
import Image from "next/image";
import Stores from "../stores";

const steps = [
  {
    stepNo: "01",
    stepTitle: "Download the App",
    stepDescription: "Share your booking link to automate scheduling",
  },
  {
    stepNo: "02",
    stepTitle: "Create your profile",
    stepDescription: "Share your booking link to automate scheduling",
  },
  {
    stepNo: "03",
    stepTitle: "Start working, managing or booking",
    stepDescription: "Share your booking link to automate scheduling",
  },
];

export default function StepsCards() {
  return (
    <div className="my-8 py-8 rounded bg-[#2C2C2C] border border-[#383838]">
      <p className="text-3xl text-center text-[#CEC9BC] mt-8">
        Get Started Within 3 easy steps
      </p>
      <p className="text-base text-center text-[#CEC9BC]">
        Whether you are a barber, shop owner or client getting started is quick
        and easy
      </p>
      <div className="flex w-3/4 md:w-2/5 mx-auto mt-8 items-center [&_p]:bg-[#CEC9BC] [&_div]:bg-[#CEC9BC] [&_div]:w-full [&_div]:h-2 [&_p]:px-4 [&_p]:py-2 [&_p]:rounded-full">
        <p>1</p>
        <div
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={100}
          role="progressbar"
          className=""
        ></div>
        <p>2</p>
        <div
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={100}
          role="progressbar"
        ></div>
        <p>3</p>
      </div>
      <div className="grid md:grid-rows-3  gap-4 py-8 mx-auto *:flex *:max-w-sm *:items-start *:gap-x-4  *:p-6 text-[#CEC9BC] ">
        {steps &&
          steps.map((step) => (
            <div
              key={step.stepNo}
              className="w-fit mx-auto grid grid-cols-2 bg-[#383838] hover:bg-[#383838]/80 [&>p]:text-xl [&>p]:font-bold [&_p:first-child]:font-bold [&_p:last-child]:text-[#CEC9BC]/70"
            >
              <p>{step.stepNo}</p>
              <div>
                <p>{step.stepTitle}</p>
                <p>{step.stepDescription}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="grid md:flex justify-center gap-4">
        <Stores />
      </div>
    </div>
  );
}
