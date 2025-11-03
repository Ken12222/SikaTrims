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
      solution: "This is how to find barbers",
    },
    {
      heading: "CAN I REGISTER AS A SOLO BARBER?",
      solution: "",
    },
    {
      heading: "WHY AM I NOT GETTING CLIENTS?",
      solution: "",
    },
    {
      heading: "HOW DO I UPGRADE TO PRO?",
      solution: "",
    },
    {
      heading:
        "HOW TO UPDATE/ ADD STAFF TO A BARBERSHOP & VIEWING THEIR SCHEDULES",
      solution: "",
    },
  ];

  return (
    <section className="w-full flex py-48 justify-center">
      <div className="absolute inset-0 -z-10 h-1/2">
        <Image src={contact} alt="" fill priority className="object-cover" />
      </div>
      <div className="w-full *:text-[#CEC9BC] grid gap-4">
        <form action="">
          <Input placeholder="search for a question" type="text" />
        </form>

        {helpContents &&
          helpContents.map((h) => (
            <div
              key={h.heading}
              className="bg-[#383838] p-4 h-fit flex justify-between"
            >
              {openAccordion && openAccordion === h.heading ? (
                <>
                  <p>{h.solution}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
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
                </>
              ) : (
                <>
                  <p>{h.heading}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
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
                </>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
