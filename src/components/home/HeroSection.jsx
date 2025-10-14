"use client";
import Image from "next/image";
import gstore from "../../../public/gstore.png";
import ggstore from "../../../public/ggstore.png";
import astore from "../../../public/astore.png";
import Link from "next/link";

export default function HeroSection({
  heroText, //this is main hero text
  subText, //this is the sub text
  HeroImage, //this is the bg image
  ctagoogleStore, //link to google store
  ctaappStore, //link to appstore
}) {
  return (
    <section className="w-full pt-8 flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImage}
          fill
          priority
          sizes="80vw"
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
        <div className="flex gap-4">
          {ctagoogleStore && (
            <Link href={ctagoogleStore}>
              <Image
                src={ggstore}
                width={150}
                height={150}
                alt="google_store_icon"
              />
            </Link>
          )}
          {ctaappStore && (
            <Link href={ctaappStore}>
              <Image
                src={astore}
                width={150}
                height={150}
                alt="app_store_icon"
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
