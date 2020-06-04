import React, { Fragment } from 'react';
import Head from 'next/head';
import MyComponent from "../components/MyComponent";

const Home = () => (<Fragment>
  <Head>
    <title>Next.js + Jest + TypeScript</title>
  </Head>
  <p>A simple example repo</p>
  <MyComponent />
</Fragment>);

export default Home;

