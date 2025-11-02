"use client";
import Image from "next/image";
import Stores from "../stores";

export default function HeroSection({
  heroText, //this is main hero text
  subText, //this is the sub text
  HeroImage, //this is the bg image
}) {
  return (
    <section className="w-full pt-8 flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImage}
          fill
          priority
          className="object-cover"
          alt="hero_image"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0,0, 1)0%, rgba(23,23,23,0.6), rgba(0,0,0,0.1))",
          }}
        />
      </div>
      <div className="text-[#CEC9BC]">
        <div className="my-8">
          <h1 className="text-6xl mb-4">{heroText}</h1>
          <p className="text-xl">{subText}</p>
        </div>
        <Stores />
      </div>
    </section>
  );
}
