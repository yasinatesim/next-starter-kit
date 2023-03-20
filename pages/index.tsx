import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Starter Kit</title>
        <meta name="description" content="Next Starter Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Next Starter Kit</h1>
      </div>
    </>
  );
};

export default Home;
