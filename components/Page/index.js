// @flow
import Head from 'next/head';
import React, { type Node } from 'react';
import { Container } from './style';

type PropTypes = {
  children: Node,
  title?: string
};

export default function Page({ children, title = 'This is the default title' }: PropTypes) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
      </Head>
      {children}
    </Container>
  );
}
