import React from 'react';
import Link from 'next/link';

type Props = {};

const Navbar: React.SFC<Props> = props => (
  <div className="bg-dark-blue mb3 pa3" {...props}>
    <ul className="list ma0 pa0 flex">
      <li className="db mr2">
        <Link href="/">
          <a className="white hover-gold no-underline">Home</a>
        </Link>
      </li>
      <li className="db mr2">
        <Link href="/a">
          <a className="white hover-gold no-underline">A</a>
        </Link>
      </li>
      <li className="db">
        <Link href="/b">
          <a className="white hover-gold no-underline">B</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default React.memo(Navbar);
