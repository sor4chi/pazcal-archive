import { Footer } from "../organisms/layouts/footer";
import { Header } from "../organisms/layouts/header";

export const HeaderFooterLayout = (page: React.ReactNode) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{page}</main>
      <Footer />
    </div>
  );
};
