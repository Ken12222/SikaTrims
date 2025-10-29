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
      <Link href={"/"}>
        <FaYoutube size={25} />
      </Link>
      <Link href={"/"}>
        <RiInstagramFill size={25} />
      </Link>
      <Link href={"/"}>
        <FaSquareXTwitter size={22} />
      </Link>
      <Link href={"/"}>
        <FaLinkedin size={22} />
      </Link>
      <Link href={"/"}>
        <AiFillTikTok size={25} />
      </Link>
    </div>
  );
}
