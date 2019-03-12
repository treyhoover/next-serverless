import React, { useEffect } from 'react';
import Head from 'next/head';

type Props = {
  bodyClassName?: string;
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
  favicon?: string;
};

const Page: React.SFC<Props> = ({
  bodyClassName,
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
    const bodyClassNameArray = bodyClassName.split(' ');

    document.body.classList.add(...bodyClassNameArray);

    return () => {
      document.body.classList.remove(...bodyClassNameArray);
    };
  }, [bodyClassName]);

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
  bodyClassName: 'bg-navy white',
  className: 'min-vh-100 sans-serif',
  type: 'website',
};

export default Page;
