import App, { Container } from 'next/app';
import React from 'react';
import '../css/tachyons.min.css';
import '../css/custom.css';

class MyApp extends App {
  componentDidMount() {
    if (process.browser) {
      import(/* webpackChunkName: 'webfontloader' */ 'webfontloader').then(
        WebFont => {
          WebFont.load({
            google: {
              families: ['Roboto'],
            },
          });
        }
      );

      setTimeout(() => {
        const { className, classList } = document.documentElement;

        if (!className.includes('wf-inactive')) {
          classList.add('wf-error');
        }
      }, 1000);
    }
  }

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
