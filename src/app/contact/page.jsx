"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import contact from "../../../public/Vector.png";
import Socials from "@/components/footer/socials";

export default function ContactUs() {
  return (
    <section className="w-full h-screen py-32 justify-center items-center">
      <div className="absolute inset-0 -z-10 h-1/2">
        <Image
          src={contact}
          alt="contact_cover_image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className=" grid md:grid-cols-2 h-fit bg-[#CEC9BC]">
        <div className="relative inset-0">
          <Image
            src={contact}
            alt="contact_us_image"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Contact Us form */}
        <div>
          <form
            action={""}
            className="p-4 md:p-16 [&_Input]:border-[#2C2C2C] [&_Textarea]:border-[#2C2C2C]"
          >
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
            <div>
              <Socials className="flex justify-center items-center mt-4 gap-4" />
            </div>
            <Button className={"mt-4 w-full hover:gray-800"}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
