"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import book from "../../../public/Vector.png";
import chair from "../../../public/chair.png";
import shop from "../../../public/shop.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function FromSikatrim() {
  return (
    <section className="w-full mx-auto *:text-center [&>p]:text-[#CEC9BC] my-16">
      <p className="text-2xl">Get The Most Out of Sikatrim</p>
      <p>Find trusted barbers, schedule sessions, track your appointments</p>

      <Tabs defaultValue="client">
        <TabsList
          className={"md:w-2/5 mx-auto my-4 bg-[#383838] *:text-[#CEC9BC]"}
        >
          <TabsTrigger value="client">For Clients</TabsTrigger>
          <TabsTrigger value="barber">For Barbers</TabsTrigger>
          <TabsTrigger value="barbershop">For Barbershops</TabsTrigger>
        </TabsList>
        <TabsContent
          value="client"
          className={"grid md:grid-cols-2 gap-8 items-center "}
          style={{
            background:
              "linear-gradient(35deg, rgb(161, 157, 147), rgb(161, 157, 147), rgb(206, 201, 188))",
          }}
        >
          <div className="">
            <Image src={book} alt={"from_image"} />
          </div>
          <div className="mx-4 p-4 *:text-left *:flex *:gap-4 [&_p:last-child]:my-6  *:items-center [&>p:first-child]:text-3xl [&_p:last-child]:text-[#2C2C2C] [&_p]:text-lg">
            <p className="text-4xl font-bold ">Book With Ease</p>
            <p className="text-sm text-[#2C2C2C]/60">
              Book.Pay.Stay Updated. No calls. Just smooth grooming with
              Sikatrim.
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
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </div>

              <p>
                Stay ready. We’ll remind you when it’s almost time for your cut.
              </p>
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

              <p>Lock in your usual barber or try someone new.</p>
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
              <p>Change of plans? Tap, reschedule, done.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="barber"
          className={"grid md:grid-cols-2 gap-8 items-center "}
          style={{
            background:
              "linear-gradient(35deg, rgb(161, 157, 147), rgb(161, 157, 147), rgb(206, 201, 188))",
          }}
        >
          <div className="">
            <Image src={chair} alt={"from_image"} />
          </div>
          <div className="mx-4 p-4 *:text-left *:flex *:gap-4 [&_p:last-child]:my-6  *:items-center [&>p:first-child]:text-3xl [&_p:last-child]:text-[#2C2C2C] [&_p]:text-lg">
            <p className="text-4xl font-bold ">Manage your own chair</p>
            <p className="text-sm text-[#2C2C2C]/60">
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
          </div>
        </TabsContent>
        <TabsContent
          value="barbershop"
          className={"grid md:grid-cols-2 gap-8 items-center "}
          style={{
            background:
              "linear-gradient(35deg, rgb(161, 157, 147), rgb(161, 157, 147), rgb(206, 201, 188))",
          }}
        >
          <div className="">
            <Image src={shop} alt={"from_image"} />
          </div>
          <div className="mx-4 p-4 *:text-left *:flex *:gap-4 [&_p:last-child]:my-6  *:items-center [&>p:first-child]:text-3xl [&_p:last-child]:text-[#2C2C2C] [&_p]:text-lg">
            <p className="text-4xl font-bold ">Mange Your Shop</p>
            <p className="text-sm text-[#2C2C2C]/60">
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
                    d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                  />
                </svg>
              </div>

              <p>Track barber schedules live know who’s available, when.</p>
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
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>

              <p>Drive more bookings, keep your barbers in action.</p>
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
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <p>All your insights. One app. No extra tools req</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
