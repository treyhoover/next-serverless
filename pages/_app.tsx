import App, { Container } from 'next/app';
import React from 'react';
import '@curiositystream/curiosity-theme/css/tachyons.min.css';
import '../static/styles.css';

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

        if (className.indexOf('wf-') === -1) {
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
