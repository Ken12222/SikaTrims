"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  const policies = [
    {
      heading: "",
      subheading: "",
      list: {
        1: "Personal Information: Name, phone number, email, profile picture.",
        2: "Location Data: To suggest nearby barbers and shops.",
        3: "Payment Information: Processed via secure third-party payment providers (we do not store full card/MoMo details).",
        4: "Booking History: Services booked, times, providers.",
        5: "Uploaded Content: Photos, videos of haircuts, and reviews.",
        6: "Device & Usage Data: IP address, device type, app version, browsing patterns.",
      },
    },
  ];

  return (
    <section className="w-full h-fit pt-38 pb-16 md:flex justify-between gap-8 text-[#CEC9BC]">
      <div className="bg-[#383838] md:inset-0 md:w-full h-fit px-8 py-4  [&_li]:my-2 [&_li]:hover:text-[#383838] [&_li]:transition-10 ease-in">
        <nav>
          <ul>
            <li>
              <Link href={"#purpose"}>Purpose</Link>
            </li>
            <li>
              <Link href={"#collect"}>Information We Collect</Link>
            </li>
            <li>
              <Link href={"#we_use"}>How We Use Your Information</Link>
            </li>
            <li>
              <Link href={"#share_your_info"}>Sharing Your Information</Link>
            </li>
            <li>
              <Link href={"#cookies_tracking"}>Cookies & Tracking</Link>
            </li>
            <li>
              <Link href={"#your_rights"}>Your Rights</Link>
            </li>
            <li>
              <Link href={"#data_security"}>Data Security</Link>
            </li>
            <li>
              <Link href={"#children_privacy"}>Children’s Privacy</Link>
            </li>
            <li>
              <Link href={"#trimspiration"}>Trimspiration</Link>
            </li>
            <li>
              <Link href={"#cookies_tracking"}>Policy Updates</Link>
            </li>
            <li>
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="[&_p:first-child]:text-xl [&_p:last-child]:text-base [&>div]:my-4 [&_p:first-child]:font-bold">
        <div id="purpose">
          <p>Purpose</p>
          <p>
            Sikatrim values your privacy. This Privacy Policy explains what
            personal information we collect, how we use it, and how we protect
            it.
          </p>
        </div>
        <div id="collect">
          <p>Information We Collect</p>
          <p>We may collect:</p>
          <ol>
            <li>
              ● Personal Information: Name, phone number, email, profile
              picture.
            </li>
            <li>● Location Data: To suggest nearby barbers and shops.</li>
            <li>
              ● Payment Information: Processed via secure third-party payment
              providers (we do not store full card/MoMo details).
            </li>
            <li>● Booking History: Services booked, times, providers.</li>
            <li>
              ● Uploaded Content: Photos, videos of haircuts, and reviews.
            </li>
            <li>
              ● Device & Usage Data: IP address, device type, app version,
              browsing patterns.
            </li>
          </ol>
        </div>
        <div id="we_use">
          <p>How We Use Your Information</p>
          <p>We use your data to:</p>
          <ol>
            <li>● Facilitate bookings between Clients and Barbers/Shops.</li>
            <li>● Process payments and subscription fees.</li>
            <li>● Improve service recommendations.</li>
            <li>● Booking History: Services booked, times, providers.</li>
            <li>
              ● Communicate promotions, confirmations, and important updates.
            </li>
            <li>● Prevent fraud and abuse.</li>
            <li>● Comply with legal obligations.</li>
          </ol>
        </div>
        <div id="share_your_info">
          <p>Sharing Your Information</p>
          <p>We only share your information with:</p>
          <ol>
            <li>● Barbers & Shops you book with.</li>
            <li>● Payment processors for transaction handling.</li>
            <li>
              ● Service providers who assist with app hosting, analytics, or
              marketing.
            </li>
            <li>● Legal authorities if required by law.</li>
          </ol>
        </div>
        <div id="cookies_tracking">
          <p>Cookies & Tracking</p>
          <p>
            We may use cookies, analytics, and tracking tools to improve user
            experience and measure app performance.
          </p>
        </div>
        <div id="your_rights">
          <p>Your Rights</p>
          <p>
            In accordance with Ghana’s Data Protection Act, you have the right
            to:
          </p>
          <ol>
            <li>● Access the personal information we hold about you.</li>
            <li>● Request correction of incorrect data.</li>
            <li>
              ● Request deletion of your account and personal information.
            </li>
            <li>● Opt out of marketing messages at any time.</li>
          </ol>
        </div>
        <div id="data_security">
          <p>Data Security</p>
          <p>
            We protect your data using encryption, secure servers, and
            restricted access. No method of transmission over the internet is
            100% secure, but we take all reasonable steps to protect your data.
          </p>
        </div>
        <div id="children_privacy">
          <p>Children’s Privacy</p>
          <p>
            Sikatrim is not intended for children under 16. We do not knowingly
            collect their data.
          </p>
        </div>
        <div id="trimspiration">
          <p>Trimspiration</p>
          <p>
            As part of the Sikatrim ecosystem, your gallery content (images and
            videos) may be featured on Trimspiration, our inspiration feed
            available to all users.
          </p>
          <ol>
            <li>
              ● Purpose: Trimspiration helps clients discover haircut ideas and
              allows barbers and barbershops to showcase their skills.
            </li>
            <li>
              ● Consent: By agreeing to this Privacy Policy, you consent to your
              gallery being used on Trimspiration.
            </li>
            <li>
              ● Content Usage: Only content you upload to your gallery will be
              displayed. Personal information such as contact or payment details
              will never be shown on Trimspiration.
            </li>
            <li>
              ● Ownership: You retain ownership of your uploaded content;
              however, you grant Sikatrim a non-exclusive, royalty-free right to
              display your gallery within Trimspiration solely for promotional
              or inspirational purposes.
            </li>
            <li>
              ● No Sale of Content: Sikatrim does not sell or transfer your
              images or videos to third parties.
            </li>
          </ol>
        </div>
        <div id="cookies_tracking">
          <p>Policy Updates</p>
          <p>
            We may update this Privacy Policy to reflect changes in law or our
            operations. Updates will be posted in the app and on our website.
          </p>
        </div>
        <div id="contact">
          <p>Contact</p>
          <p>For privacy concerns, contact:</p>
          <p>privacy@sikatrim.com</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </section>
  );
}
