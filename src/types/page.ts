import { NextPage } from "next";
import { Session } from "next-auth";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type CustomPageProps = {
  title: string;
  description: string;
  keywords: string;
};

export type AppPropsWithLayout = {
  Component: NextPageWithLayout;
  pageProps: { session: Session | null } & CustomPageProps;
};
