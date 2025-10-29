"use client";

const terms = [
  {
    id: 1,
    title: "Introduction",
    content: [
      {
        term: "Welcome to Sikatrim! These Terms & Conditions (“Terms”) govern your access to and use of the Sikatrim mobile application and related services (the “Platform”).",
      },
      {
        term: "By creating an account or using our Platform, you agree to these Terms. If you disagree, do not use Sikatrim.",
      },
    ],
  },
  {
    id: 2,
    title: "Definitions",
    content: [
      {
        term: "'Client' - A person booking barbering services through the Platform.",
      },
      {
        term: "'Barber', - An individual registered to provide barbering services through the Platform.",
      },
      {
        term: "'Barbershop', - A business registered to provide barbering services through the Platform.",
      },
      { term: "We / Us / Our - Sikatrim Limited." },
    ],
  },
  {
    id: 3,
    title: "Eligibility",
    content: [
      {
        term: "You must be at least 16 years old to create an account and use Sikatrim.",
      },
      { term: "By registering, you confirm that:" },
      { term: "You are legally capable of entering into a binding agreement." },
      { term: "All information you provide is accurate and up to date." },
    ],
  },
  {
    id: 4,
    title: "Account Creation & Security",
    content: [
      {
        term: "Users must register with a valid phone number, email, or social login.",
      },
      { term: "You are responsible for all activities under your account." },
      {
        term: "You must not share your password or allow unauthorized access.",
      },
    ],
  },
  {
    id: 5,
    title: "Bookings & Payments",
    content: [
      {
        term: "Clients can book barbers or barbershops for services at specified times.",
      },
      {
        term: "Payments may be made via Mobile Money, debit/credit cards, or in cash (if the barber/shop accepts).",
      },
      {
        term: "We may charge transaction fees, subscription fees, or commissions as stated in our pricing policy.",
      },
      {
        term: "Any disputes over service quality must be addressed directly between the Client and the Barber/Barbershop, though Sikatrim may mediate where possible.",
      },
    ],
  },
  {
    id: 6,
    title: "Cancellations & Refunds",
    content: [
      {
        term: "Cancellation policies vary by Barber/Barbershop and are displayed before booking.",
      },
      {
        term: "Refund eligibility depends on the service provider’s policy and our payment processing timelines.",
      },
      { term: "Sikatrim is not responsible for refunds outside our platform." },
    ],
  },
  {
    id: 7,
    title: "Subscriptions for Barbers & Barbershops",
    content: [
      { term: "We offer different subscription tiers with varying features." },
      {
        term: "Subscription fees are non-refundable except as required by law.",
      },
      { term: "Failure to renew may result in loss of premium features." },
    ],
  },
  {
    id: 8,
    title: "Content Uploads & Intellectual Property",
    content: [
      {
        term: "Barbers and Barbershops can upload photos and videos of their work to their profiles or the “Trimspiration” gallery.",
      },
      { term: "You confirm that you own the rights to all uploaded content." },
      {
        term: "By uploading, you grant Sikatrim a non-exclusive, royalty-free, worldwide license to display and promote that content.",
      },
    ],
  },
  {
    id: 9,
    title: "Trimspiration",
    content: [
      {
        term: "Purpose - Trimspiration allows users to discover haircut ideas and helps barbers and barbershops showcase their creativity and skills.",
      },
      {
        term: "Content Display - By uploading to your gallery or profile, you consent to Sikatrim displaying your work on Trimspiration.",
      },
      {
        term: "Ownership - You retain ownership of your uploaded content. However, you grant Sikatrim a limited, non-exclusive, royalty-free right to use and display your content solely within the Platform for promotional and inspirational purposes.",
      },
      {
        term: "Prohibited Content - Only haircut and grooming-related content is permitted. Any unrelated or inappropriate uploads may lead to removal or account suspension.",
      },
      {
        term: "No Sale of Content - Sikatrim does not sell or transfer your Trimspiration content to third parties.",
      },
    ],
  },
  {
    id: 10,
    title: "Prohibited Activities",
    content: [
      { term: "Post false, misleading, or illegal content." },
      { term: "Harass, abuse, or discriminate against others." },
      { term: "Attempt to hack, reverse-engineer, or disrupt the Platform." },
      {
        term: "Use the Platform for services not related to barbering or grooming.",
      },
    ],
  },
  {
    id: 11,
    title: "Liability Disclaimer",
    content: [
      { term: "Sikatrim does not directly provide barbering services." },
      {
        term: "Sikatrim is not responsible for injuries, damages, or losses resulting from booked services.",
      },
      {
        term: "Sikatrim limits its liability to the maximum extent permitted by Ghanaian law.",
      },
    ],
  },
  {
    id: 12,
    title: "Termination",
    content: [
      {
        term: "We may suspend or terminate accounts that violate these Terms.",
      },
      {
        term: "We may also terminate accounts that engage in fraudulent or harmful activity.",
      },
    ],
  },
  {
    id: 13,
    title: "Governing Law & Disputes",
    content: [
      {
        term: "These Terms are governed by the laws of the Republic of Ghana.",
      },
      {
        term: "Disputes will be resolved through mediation before court action, unless urgent legal relief is required.",
      },
    ],
  },
  {
    id: 14,
    title: "Changes to Terms",
    content: [
      { term: "We may update these Terms at any time." },
      {
        term: "Continued use of the Platform after changes means you accept the updated Terms.",
      },
    ],
  },
  {
    id: 15,
    title: "Contact",
    content: [{ term: "support@sikatrim.com" }, { term: "Accra, Ghana" }],
  },
];

export default function TermsOfUse() {
  return (
    <section className="py-32 md:w-3/5 mx-auto flex flex-wrap items-center *:text-[#CEC9BC]">
      <h1 className="text-3xl mt-8 font-bold">Terms Of Service</h1>
      <div className="w-full">
        {terms &&
          terms.map((t) => (
            <div
              key={t.id}
              className="[&>p:first-child]:font-bold [&>p:first-child]:text-xl [&>p:first-child]:mt-8 [&>p:first-child]:mb-2"
            >
              <p>{t.title}</p>
              <ol>
                {t.content &&
                  t.content.map((c) => (
                    <li key={c.term}>
                      <p className="text-lg">{c.term}</p>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
      </div>
    </section>
  );
}
