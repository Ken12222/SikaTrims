"use client";

import Image from "next/image";
import Link from "next/link";
import googleStore from "../../public/ggstore.png";
import appStore from "../../public/astore.png";

const storeLogos = [
  {
    store: "google_store",
    logo: googleStore,
    href: "https://apps.apple.com/gh/app/sikatrim/id6746683973",
  },
  {
    store: "app_store",
    logo: appStore,
    href: "https://apps.apple.com/gh/app/sikatrim/id6746683973",
  },
];

export default function Stores() {
  return (
    <div className="text-[#CEC9BC]">
      <div className="flex gap-4">
        {storeLogos &&
          storeLogos.map((s) => (
            <Link
              key={s.store}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={s.logo} width={150} height={150} alt={s.store} />
            </Link>
          ))}
        {/* {ctagoogleStore && (
          <Link href={ctagoogleStore}>
            <Image
              src={ggstore}
              width={150}
              height={150}
              alt="google_store_icon"
            />
          </Link>
        )} */}
        {/* {ctaappStore && (
          <Link href={ctaappStore}>
            <Image src={astore} width={150} height={150} alt="app_store_icon" />
          </Link>
        )} */}
      </div>
    </div>
  );
}
