import React, { useState } from 'react';
import Page from '../components/Page';
import Search from '../components/Search';
import TournamentsPanel from '../components/TournamentsPanel';
import { Container } from '../components/Page/style';
import Head from "next/head";


export default function Home() {
  return (
    <Page>
      <Search/>
      <TournamentsPanel/>
    </Page>
  );
}
