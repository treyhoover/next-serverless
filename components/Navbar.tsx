import React from 'react';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Navbar: React.SFC<Props> = props => (
  <div {...props}>
    <ul className="list ma0 pa0 flex">
      <li className="pa2">
        <Link href="/" as="/a">
          <a className="white hover-gold">Home</a>
        </Link>
      </li>
      <li className="pa2">
        <Link href="/a" as="/a">
          <a className="white hover-gold">a</a>
        </Link>
      </li>
      <li className="pa2">
        <Link href="/b" as="/b">
          <a className="white hover-gold">b</a>
        </Link>
      </li>
    </ul>
  </div>
);

Navbar.defaultProps = {
  className: 'bg-dark-blue',
};

export default Navbar;
