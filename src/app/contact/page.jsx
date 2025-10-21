"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import contact from "../../../public/Vector.png";

export default function ContactUs() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="absolute inset-0 -z-100 h-1/2 ">
        <Image
          src={contact}
          alt="contact_us_image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols md:grid-cols-2 bg-white shadow">
        <div className="relative inset-0">
          <Image
            src={contact}
            alt="contact_us_image"
            fill
            priority
            className="object-cover"
          />
        </div>
        <form className="p-4 md:p-16 ">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              placeholder="eg: johndoe@email.com"
            />
          </div>
          <div className="my-4">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              name="subject"
              placeholder="eg: Booking Appointment"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              placeholder="eg: I need help booking appointment"
            />
          </div>
          <div>socials here</div>
          <Button className={"mt-4 w-full hover:gray-800"}>Send Message</Button>
        </form>
      </div>
    </section>
  );
}
