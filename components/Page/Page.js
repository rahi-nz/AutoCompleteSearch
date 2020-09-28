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
      </Head>
      {children}
    </Container>
  );
}
