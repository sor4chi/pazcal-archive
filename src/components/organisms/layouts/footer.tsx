import Link from "next/link";

import { FOOTER_NAVIGATION } from "../../../constants/layout";

export const Footer = () => {
  return (
    <footer className="rounded-b-lg">
      <div className="flex items-center justify-center">
        {FOOTER_NAVIGATION.map((item) => (
          <Link href={item.href} key={item.label}>
            <a className="p-2 text-gray-500 underline hover:text-gray-800">
              {item.label}
            </a>
          </Link>
        ))}
      </div>
      <span className="block w-full text-center text-gray-500">
        &copy; {new Date().getFullYear()} Pazcal. All rights reserved.
      </span>
    </footer>
  );
};
