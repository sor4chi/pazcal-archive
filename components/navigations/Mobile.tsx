import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import InformationSVG from "components/svgs/Information";
import LapSVG from "components/svgs/Lap";
import NewsSVG from "components/svgs/News";
import RankSVG from "components/svgs/Rank";
import styles from "styles/components/Navbar/Mobile.module.scss";

const MobileNavbar = () => {
  const router = useRouter();

  const isThisPage = (route: string) => {
    return router.pathname === route;
  };

  const NavItems = [
    {
      name: "ランク計算機",
      route: "/",
      icon: <RankSVG isActive={isThisPage("/")} />,
    },
    {
      name: "周回計算機",
      route: "/lap",
      icon: <LapSVG isActive={isThisPage("/lap")} />,
    },
    {
      name: "おしらせ",
      route: "/news",
      icon: <NewsSVG isActive={isThisPage("/news")} />,
    },
    {
      name: "詳細情報",
      route: "/information",
      icon: <InformationSVG isActive={isThisPage("/information")} />,
    },
  ];

  return (
    <>
      <header className={styles.logo}>
        <Image src="/PAZCAL.svg" width={200} height={70} alt="logo" />
      </header>
      <nav className={styles.nav}>
        {NavItems.map((item) => (
          <Link href={item.route} key={item.route}>
            <a
              className={[
                styles.navItem,
                isThisPage(item.route) ? styles.active : styles.inactive,
              ].join(" ")}
            >
              {item.icon}
              {item.name}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MobileNavbar;
