import React, { useEffect } from 'react';
import Head from 'next/head';

type Props = {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
  favicon?: string;
};

const Page: React.SFC<Props> = ({
  className,
  children,
  title,
  description,
  image,
  type,
  url,
  ...props
}) => {
  useEffect(() => {
    const bodyClassNameArray = className.split(' ');

    document.body.classList.add(...bodyClassNameArray);

    return () => {
      document.body.classList.remove(...bodyClassNameArray);
    };
  }, [className]);

  return (
    <div className={className} {...props}>
      <Head>
        {title && (
          <>
            <title key="title">{title}</title>
            <meta key="og:title" property={`og:title`} content={title} />
          </>
        )}

        {description && (
          <>
            <meta key="description" name="description" content={description} />
            <meta
              key="og:description"
              property={`og:description`}
              content={description}
            />
          </>
        )}

        {image && (
          <>
            <meta key="og:image" property={`og:image`} content={image} />
          </>
        )}

        <link rel="manifest" href="/static/brand/manifest.json" />
        <link
          rel="shortcut icon"
          href="/static/brand/favicon.ico?v=1"
          key="favicon"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/brand/apple-touch-icon.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/brand/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/brand/favicon-16x16.png?v=1"
        />
        <link
          rel="mask-icon"
          href="/static/brand/safari-pinned-tab.svg?v=1"
          color="#5bbad5"
        />
        <meta name="theme-color" content="#ffffff" />

        {type && (
          <>
            <meta key="og:type" property={`og:type`} content={type} />
          </>
        )}

        {url && (
          <>
            <meta key="og:url" property={`og:url`} content={url} />
          </>
        )}
      </Head>

      {children}
    </div>
  );
};

Page.defaultProps = {
  title: 'Next Serverless',
  description: 'A simple demo of next.js with lambdas',
  className: 'min-vh-100 bg-navy white sans-serif',
  type: 'website',
};

export default Page;
