"use client";

import Link from "next/link";

const terms = [
  {
    id: 1,
    title: "Introduction",
    subtext:
      "Welcome to Sikatrim! These Terms & Conditions (“Terms”) govern your access to and use of the Sikatrim mobile application and related services (the “Platform”).By creating an account or using our Platform, you agree to these Terms. If you disagree, do not use Sikatrim.",
    content: [
      {
        term: "1",
        subterm: {},
      },
    ],
  },
  {
    id: 2,
    title: "Definitions",
    subtext:
      "Welcome to Sikatrim! These Terms & Conditions (“Terms”) govern your access to and use of the Sikatrim mobile application and related services (the “Platform”).By creating an account or using our Platform, you agree to these Terms. If you disagree, do not use Sikatrim.",
    content: [
      {
        term: "2",
        subterm: {
          one: "“Client” – A person booking barbering services through the Platform.",
          two: "“Barber” – An individual registered to provide barbering services through the Platform.",
          three:
            "“Barbershop” – A business registered to provide barbering services through the Platform.",
          four: "“We,” “Us,” “Our” – Sikatrim Limited.",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Eligibility",
    subtext:
      "You must be at least 16 years old to create an account and use Sikatrim.",
    content: [
      {
        term: "3",
        subterm: {
          one: "You are legally capable of entering into a binding agreement.",
          two: "All information you provide is accurate and up to date.",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Account Creation & Security",
    subtext: "",
    content: [
      {
        term: "4",
        subterm: {
          one: "Users must register with a valid phone number, email, or social login.",
          two: "You are responsible for all activities under your account.",
          three:
            "You must not share your password or allow unauthorized access.",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Bookings & Payments",
    subtext: "",
    content: [
      {
        term: "5",
        subterm: {
          one: "Clients can book barbers or barbershops for services at specified times.",
          two: "Payments may be made via Mobile Money, debit/credit cards, or in cash (if the barber/shop accepts).",
          three:
            "We may charge transaction fees, subscription fees, or commissions as stated in our pricing policy.",
          four: "Any disputes over service quality must be addressed directly between the Client and the Barber/Barbershop, though Sikatrim may mediate where possible.",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Cancellations & Refunds",
    subtext: "",
    content: [
      {
        term: "6",
        subterm: {
          one: "Cancellation policies vary by Barber/Barbershop and are displayed before booking.",
          two: "Refund eligibility depends on the service provider’s policy and our payment processing timelines.",
          three:
            "Sikatrim is not responsible for refunds outside our platform.",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Subscriptions for Barbers & Barbershops",
    subtext: "",
    content: [
      {
        term: "7",
        subterm: {
          one: "We offer different subscription tiers with varying features.",
          two: "Subscription fees are non-refundable except as required by law.",
          three: "Failure to renew may result in loss of premium features.",
        },
      },
    ],
  },
  {
    id: 8,
    title: "Content Uploads & Intellectual Property",
    subtext:
      "Barbers and Barbershops can upload photos and videos of their work to their profiles or the “Trimspiration” gallery.",
    content: [
      {
        term: "8",
        subterm: {
          one: "You confirm that you own the rights to all uploaded content.",
          two: "By uploading, you grant Sikatrim a non-exclusive, royalty-free, worldwide license to display and promote that content.",
        },
      },
    ],
  },
  {
    id: 9,
    title: "Trimspiration",
    subtext:
      "Sikatrim provides an inspiration feature known as Trimspiration, which displays selected images and videos from barbers and barbershops to inspire clients.",
    content: [
      {
        term: "9",
        subterm: {
          one: "Purpose - Trimspiration allows users to discover haircut ideas and helps barbers and barbershops showcase their creativity and skills.",
          two: "Content Display - By uploading to your gallery or profile, you consent to Sikatrim displaying your work on Trimspiration.",
          three:
            "Ownership: You retain ownership of your uploaded content. However, you grant Sikatrim a limited, non-exclusive, royalty-free right to use and display your content solely within the Platform for promotional and inspirational purposes.",
          four: "Prohibited Content: Only haircut and grooming-related content is permitted. Any unrelated or inappropriate uploads may lead to removal or account suspension.",
          five: "No Sale of Content: Sikatrim does not sell or transfer your Trimspiration content to third parties.",
        },
      },
    ],
  },
  {
    id: 10,
    title: "Prohibited Activities",
    subtext: "Users must not:",
    content: [
      {
        term: "10",
        subterm: {
          one: "Post false, misleading, or illegal content.",
          two: "Harass, abuse, or discriminate against others.",
          three: "Attempt to hack, reverse-engineer, or disrupt the Platform.",
          four: "Use the Platform for services not related to barbering or grooming.",
        },
      },
    ],
  },
  {
    id: 11,
    title: "Liability Disclaimer",
    subtext: "Sikatrim",
    content: [
      {
        term: "11",
        subterm: {
          one: "Does not directly provide barbering services.",
          two: "Is not responsible for injuries, damages, or losses resulting from booked services.",
          three:
            "Limits its liability to the maximum extent permitted by Ghanaian law.",
        },
      },
    ],
  },
  {
    id: 12,
    title: "Termination",
    subtext: "We may suspend or terminate accounts that:",
    content: [
      {
        term: "12",
        subterm: {
          one: "Violate these Terms.",
          two: "Engage in fraudulent or harmful activity.",
        },
      },
    ],
  },
  {
    id: 13,
    title: "Governing Law & Disputes",
    subtext:
      "These Terms are governed by the laws of the Republic of Ghana.Disputes will be resolved through mediation before court action, unless urgent legal relief is required.",
    content: [
      {
        term: "13",
        subterm: {},
      },
    ],
  },
  {
    id: 14,
    title: "Changes to Terms",
    subtext:
      "We may update these Terms at any time. Continued use of the Platform after changes means you accept the updated Terms.",
    content: [
      {
        term: "14",
        subterm: {
          one: "",
          two: "",
        },
      },
    ],
  },
  {
    id: 15,
    title: "Contact",
    subtext: "For questions, contact us at:",
    content: [
      {
        term: "15",
        subterm: {
          one: "support@sikatrim.com",
          two: "Accra, Ghana",
        },
      },
    ],
  },
];

export default function TermsOfUse() {
  return (
    <section className="py-32 mx-auto flex flex-wrap items-center *:text-[#CEC9BC]">
      <h1 className="text-3xl mt-8 font-bold">Terms Of Service</h1>
      <div className="grid md:grid-cols-3 gap-16">
        <div className="bg-[#383838] w-fit h-fit p-8 mt-8">
          {terms &&
            terms.map((t) => (
              <div key={t.id} className="my-2">
                <Link className="hover:text-gray-600" href={"#" + `${t.title}`}>
                  {t.title}
                </Link>
              </div>
            ))}
        </div>
        <div className="md:col-span-2 md:w-5/6">
          {terms &&
            terms.map((t) => (
              <div
                id={`${t.title}`}
                key={t.id}
                className="[&>p:first-child]:font-bold [&>p:first-child]:text-xl [&>p:first-child]:mt-8 [&>p:first-child]:mb-2"
              >
                <p>{t.title}</p>
                <p>{t.subtext}</p>
                <ol>
                  {t.content &&
                    t.content.map((c) => (
                      <div
                        key={c.term}
                        className="[&_p]:text-base [&_>div:last-child]:mx-4"
                      >
                        {/* <p className="text-xl my-4 list-disc">{c.term}</p> */}
                        <li className="list">
                          <p className="text-xl my-4 font-semibold">{c.term}</p>
                        </li>
                        <div>
                          {c.subterm.one && (
                            <li className="list-disc">
                              <p className="text-lg">{c.subterm.one}</p>
                            </li>
                          )}
                          {c.subterm.two && (
                            <li className="list-disc">
                              <p className="text-base">{c.subterm.two}</p>
                            </li>
                          )}
                          {c.subterm.three && (
                            <li className="list-disc">
                              <p className="text-base">{c.subterm.three}</p>
                            </li>
                          )}
                          {c.subterm.four && (
                            <li className="list-disc">
                              <p className="text-base">{c.subterm.four}</p>
                            </li>
                          )}
                          {c.subterm.five && (
                            <li className="list-disc">
                              <p className="text-base">{c.subterm.five}</p>
                            </li>
                          )}
                          {c.subterm.six && (
                            <li className="list-disc">
                              {c.subterm.six && (
                                <p className="text-base">{c.subterm.six}</p>
                              )}
                            </li>
                          )}
                          {c.subterm.seven && (
                            <li className="list-disc">
                              <p className="text-base">{c.subterm.seven}</p>
                            </li>
                          )}
                        </div>
                      </div>
                    ))}
                </ol>
                {t.foot && <p className="my-4 border-t text-base">{t.foot}</p>}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
