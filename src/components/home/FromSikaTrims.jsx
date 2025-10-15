"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import image from "../../../public/Vector.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function FromSikaTrims() {
  return (
    <section className="w-full mx-auto *:text-center my-16">
      <p className="text-2xl">Get The Most Out of SikaTrims</p>
      <p>Get The Most Out of SikaTrims</p>

      <Tabs defaultValue="client">
        <TabsList className={"md:w-2/5 mx-auto my-4"}>
          <TabsTrigger value="client">For Clients</TabsTrigger>
          <TabsTrigger value="barber">For Barbers</TabsTrigger>
          <TabsTrigger value="barbershop">For Barbershops</TabsTrigger>
        </TabsList>
        <TabsContent
          value="client"
          className={"grid md:grid-cols-2 gap-8 items-center "}
          style={{
            background:
              "linear-gradient(35deg, rgba(161, 157, 147, 0.15), rgba(161, 157, 147, 0.2), rgba(206, 201, 188, 0.5))",
          }}
        >
          <div className="">
            <Image src={image} alt={"from_image"} />
          </div>
          <div className="mx-4 p-4 *:text-left *:flex *:gap-4 [&_p:last-child]:my-6  *:items-center [&>p:first-child]:text-3xl [&_p:last-child]:text-[#2C2C2C] [&_p]:text-lg">
            <p className="text-4xl font-bold ">Manage your own chair</p>
            <p className="text-base text-[#2C2C2C]">
              Take control of your bookings, time and income.
            </p>
            <div>
              <div className="bg-black p-2 rounded border-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>

              <p>Share your booking link to automate scheduling</p>
            </div>
            <div>
              <div className="bg-black p-2 rounded border-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>

              <p>Get new clients with in-app discovery</p>
            </div>
            <div>
              <div className="bg-black p-2 rounded border-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <p>Protect your time with custom no-show policies</p>
            </div>
            <Button className={"w-full md:w-fit mb-4"}>
              Download to Explore
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="barber">Change your barber here.</TabsContent>
        <TabsContent value="barbershop">
          Change your barbershop here.
        </TabsContent>
      </Tabs>
    </section>
  );
}
