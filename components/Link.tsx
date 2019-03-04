import React from 'react';
import NextLink from 'next/link';

type Props = {
  as?: any;
  href: string;
  passHref?: boolean;
  children?: any;
  className?: string;
};

const Link: React.SFC<Props> = ({ as: T, href, passHref, ...props }) => (
  <NextLink href={href} passHref={passHref}>
    <T {...props} />
  </NextLink>
);

Link.defaultProps = {
  as: 'a',
  passHref: true,
};

export default Link;
