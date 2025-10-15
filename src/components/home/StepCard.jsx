"use client";

export default function StepsCards() {
  return (
    <div className="grid md:grid-rows-3 bg-[#2C2C2C] border border-[#383838] gap-4 my-8 py-8 mx-auto *:flex *:max-w-sm *:items-start *:gap-x-4  *:p-6 text-[#CEC9BC] ">
      <div className="w-fit mx-auto grid grid-cols-2 bg-[#383838] [&>p]:text-xl [&>p]:font-bold [&_p:first-child]:font-bold [&_p:last-child]:text-[#CEC9BC]/70">
        <p>01</p>
        <div>
          <p>Download the App</p>
          <p>Share your booking link to automate scheduling</p>
        </div>
      </div>
      <div className="w-fit mx-auto grid grid-cols-2 bg-[#383838] [&>p]:text-xl [&>p]:font-bold [&_p:first-child]:font-bold [&_p:last-child]:text-[#CEC9BC]/70">
        <p>02</p>
        <div>
          <p>Create your profile</p>
          <p>Share your booking link to automate scheduling</p>
        </div>
      </div>
      <div className="w-fit mx-auto grid grid-cols-2 bg-[#383838] [&>p]:text-xl [&>p]:font-bold [&_p:first-child]:font-bold [&_p:last-child]:text-[#CEC9BC]/70">
        <p>03</p>
        <div>
          <p>Start working, managing or booking</p>
          <p>Share your booking link to automate scheduling</p>
        </div>
      </div>
    </div>
  );
}
