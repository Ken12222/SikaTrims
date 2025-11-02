"use client";

const card1Content = [
  {
    title: "Built for Barbers, Not Just Clients",
    text: "Everything you need to run and grow your chair or shop.",
  },
  {
    title: "More Bookings, Less Stress",
    text: "Streamline appointments and keep your schedule full.",
  },
  {
    title: "Grow Your Brand",
    text: "Showcase your cuts, build loyalty, and attract new clients online.",
  },
];
const card2Content = [
  {
    title: "Add Your Own Services",
    text: "Customize the services you offer, from fades to beard trims, with your own pricing.",
  },
  {
    title: "Team Management",
    text: "Add staff, assign chairs, and keep everyone’s calendar organized.",
  },
  {
    title: "Stay Connected",
    text: "Add staff, assign chairs, and keep everyone’s calendar organized.",
  },
];
export default function AboutSection() {
  return (
    <section className="grid md:grid-cols-3 *:bg-[#383838] gap-4 my-8 mx-auto *:flex *:flex-wrap *:max-w-sm *:items-center *:gap-x-4  *:p-6 text-[#CEC9BC] ">
      <div>
        <div className="bg-black p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664"
            />
          </svg>
        </div>
        {card1Content &&
          card1Content.map((card1) => (
            <div key={card1.title} className="[&>p]:text-sm">
              <p className="mt-4">
                <strong>{card1.title}</strong>
              </p>
              <p className="text-[#CEC9BC]/60">{card1.text}</p>
            </div>
          ))}
      </div>
      <div>
        <div className="bg-black p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
            />
          </svg>
        </div>
        {card2Content &&
          card2Content.map((card2) => (
            <div key={card2.title} className="[&>p]:text-sm">
              <p className="mt-4">
                <strong>{card2.title}</strong>
              </p>
              <p className="text-[#CEC9BC]/60">{card2.text}</p>
            </div>
          ))}
      </div>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(161, 157, 147, 0.5), rgba(206, 201, 188, 0.7))",
        }}
        className="w-fit gap-4"
      >
        <div className="bg-black p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
            />
          </svg>
        </div>
        <div className="text-black mb-8">
          <div className="flex gap-2 items-end mb-4">
            <p className="text-[#2C2C2C] text-2xl">
              Manage Appointments. Maximize Growth.
            </p>
          </div>
          <p className="text-[#2C2C2C]">
            Streamline your bookings, fill your chairs, and watch your business
            thrive. From solo barbers to full studios, manage appointments
            effortlessly and focus on what you do best: creating great styles.
          </p>
        </div>
      </div>
    </section>
  );
}
