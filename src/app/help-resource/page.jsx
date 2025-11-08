"use client";

import Image from "next/image";
import contact from "../../../public/contact.png";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HelpResource() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const helpContents = [
    {
      heading: "HOW DO I FIND A BARBER ?",
      solution:
        "YOU CAN EASILY FIND BARBERS NEAR YOU BY USING THE SEARCH OR LOCATION FILTER ON THE SIKATRIM APP. BROWSE PROFILES, CHECK RATINGS, AND BOOK YOUR PREFERRED BARBER IN SECONDS.",
    },
    {
      heading: "CAN I REGISTER AS A SOLO BARBER?",
      solution:
        "YES! SOLO BARBERS CAN CREATE A PROFILE, LIST THEIR SERVICES, SET PRICES, MANAGE APPOINTMENTS, AND GROW THEIR CLIENT BASE—ALL DIRECTLY THROUGH THE SIKATRIM APP.",
    },
    {
      heading: "WHY AM I NOT GETTING CLIENTS?",
      solution:
        "MAKE SURE YOUR PROFILE IS COMPLETE—ADD QUALITY PHOTOS, CLEAR SERVICE DESCRIPTIONS, ACCURATE PRICING, AND ENCOURAGE CLIENTS TO LEAVE REVIEWS. STAYING ACTIVE AND RESPONSIVE ALSO INCREASES VISIBILITY.",
    },
    {
      heading:
        "HOW TO UPDATE/ ADD STAFF TO A BARBERSHOP & VIEWING THEIR SCHEDULES",
      solution:
        "GO TO YOUR SHOP DASHBOARD → SELECT “MANAGE STAFF” → TAP “ADD STAFF” OR “EDIT STAFF.” YOU CAN VIEW THEIR SCHEDULES, ASSIGN CLIENTS, AND TRACK APPOINTMENTS ALL IN ONE PLACE.",
    },
    {
      heading: "HOW DO CLIENTS PAY FOR SERVICES?",
      solution:
        "CLIENTS CAN PAY ONLINE THROUGH SIKATRIM USING MOBILE MONEY OR BANK TRANSFERS, OR CHOOSE TO PAY IN PERSON AFTER THEIR APPOINTMENT. ALL ONLINE PAYMENTS ARE FAST, SECURE, AND RECORDED AUTOMATICALLY.",
    },
    {
      heading: "HOW DO I CANCEL OR RESCHEDULE AN APPOINTMENT?",
      solution:
        "SIMPLY GO TO YOUR “BOOKINGS” SECTION, SELECT THE APPOINTMENT, AND CHOOSE “CANCEL” OR “RESCHEDULE.” BOTH CLIENTS AND BARBERS ARE INSTANTLY NOTIFIED OF THE CHANGES.",
    },
    {
      heading: " WHAT IS THE CANCELLATION POLICY?",
      solution:
        "BARBERS AND BARBERSHOPS CAN SET THEIR OWN CANCELLATION POLICY BASED ON THEIR PREFERENCES. EACH POLICY CLEARLY OUTLINES TIMEFRAMES FOR CANCELLATIONS, RESCHEDULES, AND ANY POTENTIAL FEES. CLIENTS ARE SHOWN THESE TERMS BEFORE CONFIRMING A BOOKING.",
    },
    {
      heading: " HOW DOES THE RATING SYSTEM WORK?",
      solution:
        "AFTER EVERY APPOINTMENT, CLIENTS CAN RATE AND REVIEW THEIR BARBER. HIGHER RATINGS IMPROVE VISIBILITY AND HELP NEW CLIENTS DISCOVER TRUSTED BARBERS FASTER.",
    },
    {
      heading: "CAN I OPERATE AS A MOBILE BARBER?",
      solution:
        "ABSOLUTELY. WHEN SETTING UP YOUR PROFILE, SELECT “MOBILE SERVICES” TO LET CLIENTS KNOW YOU CAN TRAVEL TO THEIR LOCATION FOR APPOINTMENTS.",
    },
    {
      heading: "HOW DO I JOIN THE WAITLIST FOR EARLY ACCESS?",
      solution:
        "VISIT SIKATRIM.COM AND TAP “JOIN WAITLIST.” YOU’LL RECEIVE EARLY UPDATES AND LAUNCH NOTIFICATIONS AS SOON AS SIKATRIM GOES LIVE IN YOUR AREA.",
    },
    {
      heading: "WHAT IS STORE CREDIT AND HOW DOES IT WORK?",
      solution:
        "WHEN A CLIENT PAYS ONLINE AND LATER RESCHEDULES, A STORE CREDIT IS AUTOMATICALLY ISSUED. THIS CREDIT CAN BE USED TOWARD A FUTURE BOOKING WITH THE SAME BARBER OR SHOP, ENSURING YOUR PAYMENT NEVER GOES TO WASTE.",
    },
  ];

  return (
    <section className="w-full flex py-48 justify-center">
      <div className="absolute inset-0 -z-10 h-1/2">
        <Image src={contact} alt="" fill priority className="object-cover" />
      </div>
      <div className="w-full *:text-[#CEC9BC] grid gap-4">
        {/* <form action="">
          <Input placeholder="search for a question" type="text" />
        </form> */}

        {helpContents &&
          helpContents.map((h) => (
            <div key={h.heading} className="bg-[#383838] p-4 h-fit ">
              {openAccordion && openAccordion === h.heading ? (
                <div className="grid grid-cols-4 gap-4 items-center">
                  <p className="col-span-3">{h.solution}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-auto cursor-pointer"
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === h.heading ? null : h.heading
                      )
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </div>
              ) : (
                <div className="grid grid-cols-4 item gap-4">
                  <p className="col-span-3">{h.heading}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-auto cursor-pointer"
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === h.heading ? null : h.heading
                      )
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
