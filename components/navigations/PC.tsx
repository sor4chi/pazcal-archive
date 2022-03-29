import Image from "next/image";
import Link from "next/link";

import styles from "styles/components/Navbar/PC.module.scss";

const MobileNavbar = () => {
  const NavItems = [
    { name: "ランク計算機", route: "/" },
    { name: "周回計算機", route: "/lap" },
    { name: "おしらせ", route: "/news" },
    { name: "詳細情報", route: "/information" },
  ];

  return (
    <header className={styles.header}>
      <Image src="/PAZCAL.svg" width={200} height={70} alt="logo" />
      <nav className={styles.nav}>
        {NavItems.map((item) => (
          <Link href={item.route} key={item.route}>
            <a className={styles.navItem}>{item.name}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default MobileNavbar;
