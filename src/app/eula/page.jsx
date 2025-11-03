"use client";

import Link from "next/link";

const terms = [
  {
    id: 1,
    title: "Acceptance of this Agreement",
    subtext:
      "By downloading, installing, accessing, or using the Sikatrim mobile application (“App”), you agree to be bound by this End User License Agreement (“Agreement” or “EULA”). If you do not agree to these terms, do not download, install, or use the App. This Agreement governs your use of the Sikatrim App, including all related services, features, and content provided by Sikatrim LTD.",
    content: [],
    foot: "",
  },
  {
    id: 2,
    title: "License Grant",
    subtext:
      "Sikatrim LTD grants you a non-exclusive, non-transferable, limited, revocable license to download, install, and use the Sikatrim App solely for personal or business use consistent with this Agreement. You acknowledge that:",
    content: [
      {
        term: "",
        subterm: {
          one: "The App is licensed, not sold.",
          two: "Sikatrim LTD retains all ownership rights, intellectual property, and content within the App.",
          three:
            "You may not sublicense, rent, sell, copy, distribute, or modify the App or its code in any form.",
        },
      },
    ],
    foot: "",
  },
  {
    id: 3,
    title: "Eligibility",
    subtext:
      "You must be at least 13 years old to use Sikatrim.If you are under 18, you represent that you have permission from a parent or legal guardian to use the App and book services. By using Sikatrim, you agree that all information you provide is accurate and that you have the legal capacity or authorization to enter into bookings or transactions through the App.",
    content: [],
    foot: "",
  },
  {
    id: 4,
    title: "Account Registration",
    subtext:
      "To access certain features, you may need to register and create an account.You agree to:",
    content: [
      {
        term: "",
        subterm: {
          one: "Provide accurate, current, and complete information.",
          two: "Maintain the security of your login credentials.",
          three: "Notify us immediately of unauthorized access or breach.",
        },
      },
    ],
    foot: "Sikatrim LTD does not directly provide barbering or grooming services. It acts as an intermediary platform facilitating connections between users.",
  },
  {
    id: 5,
    title: "Services Description",
    subtext:
      "Sikatrim provides a digital platform that connects clients with barbers and barbershops for booking, scheduling, payment, and review services.The App currently offers:",
    content: [
      {
        term: "",
        subterm: {
          one: "Account creation for clients, individual barbers, and barbershops.",
          two: "Service listings, scheduling, and booking management.",
          three: "Ratings and reviews.",
          four: "Payment processing through Paystack (a third-party payment processor).",
          five: "In-person or online payment options.",
        },
      },
    ],
    foot: "Sikatrim LTD does not directly provide barbering or grooming services. It acts as an intermediary platform facilitating connections between users.",
  },
  {
    id: 6,
    title: "Payment and Fees",
    subtext: "",
    content: [
      {
        term: "",
        subterm: {
          one: "At this time, use of Sikatrim is free of charge.",
          two: "Sikatrim LTD reserves the right to introduce subscription fees or premium features in the future.",
          three:
            "You will be notified in advance of any fee changes, and continued use of the App after such updates constitutes your acceptance of the new terms.",
          four: "All payment processing within the App is handled through Paystack.",
        },
      },
    ],
    foot: "By making a payment, you agree to Paystack’s own terms and privacy policies.",
  },
  {
    id: 7,
    title: "User Conduct",
    subtext: "You agree not to:",
    content: [
      {
        term: "",
        subterm: {
          one: "Use the App for unlawful, harmful, or fraudulent purposes.",
          two: "Post or transmit misleading, defamatory, obscene, or abusive content.",
          three: "Attempt to reverse-engineer, decompile, or hack the App.",
          four: "Interfere with or disrupt App operations, servers, or security systems.",
          three: "Impersonate another person or misrepresent your affiliation.",
        },
      },
    ],
    foot: "Sikatrim LTD reserves the right to suspend or terminate access for any violation.",
  },
  {
    id: 8,
    title: "Third-Party Services",
    subtext:
      "The App integrates with third-party services such as Paystack for payments and may include other tools like analytics or mapping APIs.Your use of these third-party services is governed by their respective terms and privacy policies. Sikatrim LTD is not responsible for any third-party content, service disruptions, or data handling practices.",
    content: [],
    foot: "",
  },
  {
    id: 9,
    title: "User-Generated Content and Trimspiration",
    subtext:
      "Barbers and barbershops may upload, post, or share photos, videos, descriptions, and other content (collectively “User Content”) to their Sikatrim profiles.By uploading User Content, you acknowledge and agree that:",
    content: [
      {
        term: "Automatic Display on Trimspiration",
        subterm: {
          one: "Any content posted on your barber or barbershop profile — including photos, videos, and captions — will automatically be displayed on Trimspiration, Sikatrim’s public gallery and inspiration feed.",
          two: "This visibility helps showcase your craft and inspire clients and other professionals within the Sikatrim community.",
        },
      },
      {
        term: "Content Ownership and License",
        subterm: {
          one: "You retain full ownership of your User Content.",
          two: "However, by posting on Sikatrim, you grant Sikatrim LTD a worldwide, non-exclusive, royalty-free, sublicensable license to use, display, reproduce, promote, and distribute your User Content within the App, on Trimspiration, and in related marketing or promotional materials.",
        },
      },
      {
        term: "User Responsibilities",
        subterm: {
          one: "You must ensure that your uploaded content is your original work or that you have obtained all necessary rights and permissions.",
          two: "All content posted must be strictly related to haircuts, barbering, or grooming.",
          three:
            "Posting unrelated, misleading, or inappropriate content — including but not limited to personal, sexual, violent, political, or non-barbering materials — is strictly prohibited.",
          four: "Sikatrim LTD reserves the right to remove such content immediately and ban or permanently suspend accounts found in violation.",
          five: "You agree not to post any unlawful, sexually explicit, violent, or discriminatory content.",
        },
      },
      {
        term: "Moderation and Removal",
        subterm: {
          one: "Sikatrim LTD reserves the right (but not the obligation) to review, moderate, edit, or remove User Content that violates this Agreement, community standards, or applicable laws.Sikatrim LTD is not responsible for the accuracy or reliability of content shared by other users on Trimspiration.",
        },
      },
      {
        term: "Public Visibility",
        subterm: {
          one: "Content displayed on Trimspiration may be visible to all users of the App and, where applicable, external visitors if Sikatrim chooses to feature selected works publicly.",
        },
      },
    ],
    foot: "",
  },
  {
    id: 10,
    title: "Intellectual Property Rights",
    subtext:
      "All content, trademarks, designs, code, logos, databases, and features of Sikatrim are the exclusive property of Sikatrim LTD or its licensors.You are granted no rights or ownership other than the limited license to use the App under this Agreement.Unauthorized use of Sikatrim’s intellectual property is strictly prohibited and may result in legal action.",
    content: [],
    foot: "",
  },
  {
    id: 11,
    title: "Data Privacy",
    subtext:
      "Your use of the App is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.By using the App, you consent to our data practices as outlined in the Privacy Policy.",
    content: [],
    foot: "",
  },
  {
    id: 12,
    title: "Updates and Maintenance",
    subtext:
      "Sikatrim LTD may release updates, patches, or upgrades to improve the App or fix issues.Such updates may be automatic or require manual installation.You agree to install all updates promptly to ensure optimal functionality and security.",
    content: [],
    foot: "Sikatrim LTD is not responsible for performance issues resulting from outdated versions of the App",
  },
  {
    id: 13,
    title: "Termination",
    subtext:
      "This Agreement remains effective until terminated by either you or Sikatrim LTD.You may terminate by deleting the App and all associated data from your device.",
    content: [
      {
        term: "Sikatrim LTD may terminate this license immediately, without notice, if you:",
        subterm: {
          one: "Breach any term of this Agreement,",
          two: "Engage in fraudulent or unlawful activities, or",
          three: "Interfere with App operations.",
        },
      },
    ],
    foot: "Upon termination, you must stop using the App and destroy any copies in your possession.",
  },
  {
    id: 14,
    title: "Disclaimer of Warranties",
    subtext:
      "The App is provided “as is” and “as available” without any warranties of any kind, express or implied.",
    content: [
      {
        term: "Sikatrim LTD does not warrant that:",
        subterm: {
          one: "The App will be error-free, uninterrupted, or secure.",
          two: "Any information provided will be accurate or reliable.",
          three:
            "Services or connections made through the App will meet your expectations.",
        },
      },
    ],
    foot: "You assume all risks associated with the use of the App.",
  },
  {
    id: 15,
    title: "Limitation of Liability",
    subtext:
      "To the fullest extent permitted by Ghanaian law, Sikatrim LTD, its directors, officers, employees, or partners shall not be liable for:",
    content: [
      {
        term: "Sikatrim LTD does not warrant that:",
        subterm: {
          one: "Any indirect, incidental, consequential, or punitive damages,",
          two: "Any loss of data, profits, business, or reputation,",
          three:
            "Any dispute or transaction between users (clients, barbers, or shops).",
        },
      },
    ],
    foot: "In no event shall Sikatrim LTD’s total liability exceed the amount you paid (if any) in the twelve months preceding the claim.",
  },
  {
    id: 16,
    title: "Indemnification",
    subtext:
      "You agree to defend, indemnify, and hold harmless Sikatrim LTD and its affiliates from any claims, losses, damages, or expenses (including legal fees) arising out of your use of the App or violation of this Agreement.",
    content: [],
    foot: "",
  },
  {
    id: 17,
    title: "Governing Law and Jurisdiction",
    subtext:
      "This Agreement is governed by and construed in accordance with the laws of the Republic of Ghana.Any disputes shall be resolved exclusively in the courts of competent jurisdiction within Ghana.",
    content: [],
    foot: "",
  },
  {
    id: 18,
    title: "Changes to this Agreement",
    subtext:
      "Sikatrim LTD reserves the right to modify this EULA at any time.Updated versions will be posted within the App or on our official website.Continued use of the App after such updates constitutes your acceptance of the revised terms.",
    content: [],
    foot: "",
  },
  {
    id: 19,
    title: "Contact Information",
    subtext:
      "For questions, complaints, or legal notices, please contact: Sikatrim LTD support@sikatrim.com. Accra, Ghana",
    content: [],
    foot: "",
  },
];

export default function Eula() {
  return (
    <section className="py-32 mx-auto flex flex-wrap items-center *:text-[#CEC9BC]">
      <h1 className="text-3xl mt-8 font-bold">
        Sikatrim End User License Agreement{" "}
      </h1>
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
