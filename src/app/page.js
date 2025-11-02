"use client";
import HeroSection from "@/components/home/HeroSection";
import HeroImage from "../../public/heroImage.jpeg";
import AboutSection from "@/components/home/AboutSection";
import WaitList from "@/components/home/waitlist";
import FromSikaTrims from "@/components/home/FromSikaTrims";
import StepsCards from "@/components/home/StepCard";
import Modal from "@/components/modal";

export default function Home() {
  return (
    <div className="font-sans">
      <Modal />
      <div className=" grid items-center justify-items-center min-h-screen gap-16">
        <HeroSection
          heroText={"Stay Fresh. Stay Booked."}
          subText={
            "The ultimate app for barbers and shop owners who want to grow."
          }
          HeroImage={HeroImage}
          ctagoogleStore={"/"}
          ctaappStore={"/"}
        />
      </div>
      <AboutSection />
      <WaitList
        className={"md:w-full mx-auto my-16 *:text-center *:text-[#CEC9BC]"}
        mainTextClassName={"text-4xl"}
        subtextClassName={"text-base mb-4"}
        FormclassName={
          "flex flex-wrap md:flex-nowrap gap-4 border md:w-4/5 mx-auto border-[#CEC9BC] p-4 rounded-lg"
        }
      />
      <FromSikaTrims />
      <StepsCards />
    </div>
  );
}
