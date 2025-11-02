"use client";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function Socials({ className }) {
  return (
    <div className={className}>
      <Link href={"/"}>
        <FaFacebook size={23} />
      </Link>
      <Link href={"https://youtube.com/@sikatrim?si=fmwYRWUXluipg89a"}>
        <FaYoutube size={25} />
      </Link>
      <Link
        href={
          "https://www.instagram.com/sikatrim?igsh=MzZwNXpramViOHF5&utm_source=qr"
        }
      >
        <RiInstagramFill size={25} />
      </Link>
      <Link href={"https://x.com/sikatrim?s=11"}>
        <FaSquareXTwitter size={22} />
      </Link>
      <Link href={"/"}>
        <FaLinkedin size={22} />
      </Link>
      <Link href={"https://www.tiktok.com/@sikatrim?_t=ZT-90ssu8ANJ8J&_r=1"}>
        <AiFillTikTok size={25} />
      </Link>
    </div>
  );
}
