"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  const policies = [
    {
      id: 1,
      title: "Purpose",
      subtext:
        "Sikatrim values your privacy. This Privacy Policy explains what personal information we collect, how we use it, and how we protect it.",
      content: [
        {
          term: "1",
          subterm: {},
        },
      ],
    },
    {
      id: 2,
      title: "Information We Collect",
      subtext: "We may collect:",
      content: [
        {
          term: "2",
          subterm: {
            one: "Personal Information: Name, phone number, email, profile picture",
            two: "Location Data: To suggest nearby barbers and shops.",
            three:
              "Payment Information: Processed via secure third-party payment providers (we do not store full card/MoMo details).",
            four: "Booking History: Services booked, times, providers.",
            five: "Uploaded Content: Photos, videos of haircuts, and reviews.",
            six: "Device & Usage Data: IP address, device type, app version, browsing patterns.",
          },
        },
      ],
    },
    {
      id: 3,
      title: "How We Use Your Information",
      subtext: "We use your data to:",
      content: [
        {
          term: "3",
          subterm: {
            one: "Facilitate bookings between Clients and Barbers/Shops.",
            two: "Process payments and subscription fees.",
            three: "Improve service recommendations.",
            four: "Communicate promotions, confirmations, and important updates.",
            five: "Prevent fraud and abuse.",
            six: "Comply with legal obligations.",
          },
        },
      ],
    },
    {
      id: 4,
      title: "Sharing Your Information",
      subtext: "We only share your information with:",
      content: [
        {
          term: "4",
          subterm: {
            one: "Facilitate bookings between Clients and Barbers/Shops.",
            two: "Process payments and subscription fees.",
            three: "Improve service recommendations.",
            four: "Communicate promotions, confirmations, and important updates.",
            five: "Prevent fraud and abuse.",
            six: "Comply with legal obligations.",
          },
        },
      ],
    },
    {
      id: 5,
      title: "Cookies & Tracking",
      subtext:
        "We may use cookies, analytics, and tracking tools to improve user experience and measure app performance.",
      content: [
        {
          term: "5",
          subterm: {},
        },
      ],
    },
    {
      id: 6,
      title: "Your Rights",
      subtext:
        "In accordance with Ghana’s Data Protection Act, you have the right to:",
      content: [
        {
          term: "6",
          subterm: {
            one: "Access the personal information we hold about you.",
            two: "Request correction of incorrect data.",
            three: "Request deletion of your account and personal information.",
            four: "Opt out of marketing messages at any time.",
          },
        },
      ],
    },
    {
      id: 7,
      title: "Data Security",
      subtext:
        "We protect your data using encryption, secure servers, and restricted access. No method of transmission over the internet is 100% secure, but we take all reasonable steps to protect your data.",
      content: [
        {
          term: "7",
          subterm: {},
        },
      ],
    },
    {
      id: 8,
      title: "Children’s Privacy",
      subtext:
        "Sikatrim is not intended for children under 13. We do not intentionally collect personal information from children under 13.",
      content: [
        {
          term: "8",
          subterm: {},
        },
      ],
    },
    {
      id: 9,
      title: "Trimspiration",
      subtext:
        "As part of the Sikatrim ecosystem, your gallery content (images and videos) may be featured on Trimspiration, our inspiration feed available to all users.",
      content: [
        {
          term: "9",
          subterm: {
            one: "Purpose: Trimspiration helps clients discover haircut ideas and allows barbers and barbershops to showcase their skills.",
            two: "Consent: By agreeing to this Privacy Policy, you consent to your gallery being used on Trimspiration.",
            three:
              "Content Usage: Only content you upload to your gallery will be displayed. Personal information such as contact or payment details will never be shown on Trimspiration.",
            four: "Ownership: You retain ownership of your uploaded content; however, you grant Sikatrim a non-exclusive, royalty-free right to display your gallery within Trimspiration solely for promotional or inspirational purposes.",
            five: "No Sale of Content: Sikatrim does not sell or transfer your images or videos to third parties.",
          },
        },
      ],
    },
    {
      id: 10,
      title: "Policy Updates",
      subtext:
        "We may update this Privacy Policy to reflect changes in law or our operations. Updates will be posted in the app and on our website.",
      content: [
        {
          term: "10",
          subterm: {},
        },
      ],
    },
    {
      id: 11,
      title: "Contact",
      subtext: "For privacy concerns, contact: privacy@sikatrim, Accra, Ghana",
      content: [
        {
          term: "11",
          subterm: {},
        },
      ],
    },
  ];

  return (
    <section className="w-full h-fit pt-34 pb-16 text-[#CEC9BC]">
      <h1 className="text-3xl my-8 font-bold">Privacy Policy </h1>
      <div className="w-full h-fit grid md:grid-cols-3 justify-between gap-16 text-[#CEC9BC]">
        <div className="bg-[#383838] md:inset-0 h-fit px-8 py-4  [&_li]:my-2 [&_li]:hover:text-gray-600 [&_li]:transition-10 ease-in">
          <nav>
            <ul>
              {policies &&
                policies.map((p) => (
                  <li key={p.title}>
                    <Link href={"#" + p.title}>{p.title}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className="[&_p:first-child]:text-xl [&_li]:mx-4 col-span-2 w-4/5 [&_p:last-child]:text-base [&>div]:my-4">
          {policies &&
            policies.map((p) => (
              <div key={p.id} id={`${p.title}`}>
                <p className="font-bold">{p.title}</p>
                <p>{p.subtext}</p>
                <ol>
                  {p.content &&
                    p.content.map((c) => (
                      <div key={c.term} className="[&_li]:list-disc">
                        {c.subterm.one && (
                          <li key={c.subterm.one}>
                            <p>{c.subterm.one}</p>
                          </li>
                        )}
                        {c.subterm.two && (
                          <li key={c.subterm.two}>
                            <p>{c.subterm.two}</p>
                          </li>
                        )}
                        {c.subterm.three && (
                          <li key={c.subterm.three}>
                            <p>{c.subterm.three}</p>
                          </li>
                        )}
                        {c.subterm.four && (
                          <li key={c.subterm.four}>
                            <p>{c.subterm.four}</p>
                          </li>
                        )}
                        {c.subterm.five && (
                          <li key={c.subterm.five}>
                            <p>{c.subterm.five}</p>
                          </li>
                        )}
                        {c.subterm.six && (
                          <li key={c.subterm.six}>
                            <p>{c.subterm.six}</p>
                          </li>
                        )}
                      </div>
                    ))}
                </ol>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
