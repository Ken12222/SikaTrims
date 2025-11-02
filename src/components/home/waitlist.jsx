"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function WaitList({
  className,
  mainTextClassName,
  subtextClassName,
  FormclassName,
}) {
  return (
    <section className={className}>
      <p className={mainTextClassName}>Early Access to Sikatrim Awaits</p>
      <p className={subtextClassName}>
        Designed for barbers and shop owners who want to stay digital, stay
        booked, and stay ahead.
      </p>

      <form action="" className={FormclassName}>
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
            "w-full md:w-fit bg-white text-black hover:bg-[#2C2C2C] hover:text-[#CEC9BC]"
          }
        >
          Join Waitlist
        </Button>
      </form>
    </section>
  );
}
