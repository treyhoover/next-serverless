import App, { Container } from 'next/app';
import React from 'react';
import '@curiositystream/curiosity-theme/css/tachyons.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
