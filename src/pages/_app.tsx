import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { AppPropsWithLayout } from "../types/page";
import { trpc } from "../utils/trpc";

const MyApp = ({
  Component,
  pageProps: { session, title, description, keywords, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
