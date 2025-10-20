"use client";

import Image from "next/image";
import bg from "../../../public/contact.png";

export default function Contact() {
  return (
    <div className="w-full h-screen relative inset-x-0 -z-10">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          alt="contact_bg"
          fill={true}
          priority
          className="object-cover overflow"
        />
      </div>
    </div>
  );
}
