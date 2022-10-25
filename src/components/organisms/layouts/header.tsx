import Link from "next/link";

import { HEADER_NAVIGATION } from "../../../constants/layout";

export const Header = () => {
  return (
    <header className="rounded-b-lg bg-white ">
      <div className="flex items-center justify-between p-4">
        <span className="text-2xl font-bold">PAZCAL</span>
      </div>
      <nav className="flex items-center justify-center">
        {HEADER_NAVIGATION.map((item) => (
          <Link href={item.href} key={item.label}>
            <a className="p-2 text-gray-500 hover:text-gray-800">
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};
