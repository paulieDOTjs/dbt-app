import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DBT Journal</title>
        <meta
          name="description"
          content="A free DBT tool for your keeping up with your diary card"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Today</h3>
    </div>
  );
};

export default Home;
