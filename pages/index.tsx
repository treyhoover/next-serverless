import React from 'react';
import Page from '../components/Page';
import Navbar from '../components/Navbar';

export default () => (
  <Page>
    <header>
      <Navbar />
    </header>

    <main className="ph3">This is the home page!</main>
  </Page>
);
