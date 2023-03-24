import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import Counter from '@/components/Counter';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Starter Kit</title>
        <meta name="description" content="Next Starter Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Counter />
    </>
  );
};

export default Home;
