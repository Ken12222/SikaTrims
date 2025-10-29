"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function WaitList() {
  return (
    <section className="md:w-full mx-auto my-16 *:text-center *:text-[#CEC9BC]">
      <p className="text-4xl">Early Access to Sikatrim Awaits</p>
      <p className="text-base mb-4">
        Designed for barbers and shop owners who want to stay digital, stay
        booked, and stay ahead.
      </p>

      <form
        action=""
        className="flex gap-4 border md:w-4/5 mx-auto border-[#CEC9BC] p-4 rounded-lg"
      >
        <Input
          type={"text"}
          required
          className={
            " outline-none border-none focus-visible:border-none shadow-none"
          }
          placeholder="Your EMail"
        />
        <Button
          type="submit"
          className={
            "bg-white text-black hover:bg-[#2C2C2C] hover:text-[#CEC9BC]"
          }
        >
          Join Waitlist
        </Button>
      </form>
    </section>
  );
}
