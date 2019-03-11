import React from 'react';
import Link from 'next/link';
import List from './List';

type Props = {
  className?: string;
};

type NavbarLink = {
  href: string;
  label: string;
};

const navbarLinks: NavbarLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/a',
    label: 'A',
  },
  {
    href: '/b',
    label: 'B',
  },
];

const Navbar: React.SFC<Props> = props => (
  <div {...props}>
    <List<NavbarLink> className="list ma0 pa0 flex" items={navbarLinks}>
      {(item, index) => (
        <li key={index} className="db ma2">
          <Link href={item.href}>
            <a className="white hover-gold no-underline">{item.label}</a>
          </Link>
        </li>
      )}
    </List>
  </div>
);

Navbar.defaultProps = {
  className: 'bg-dark-blue',
};

export default Navbar;
