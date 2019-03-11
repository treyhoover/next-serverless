import React from 'react';
import Link from 'next/link';
import List from './List';

type Props = {
  className?: string;
  listClassName?: string;
  listItemClassName?: string;
  listItemLinkClassName?: string;
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

const Navbar: React.SFC<Props> = ({
  listClassName,
  listItemClassName,
  listItemLinkClassName,
  ...props
}) => (
  <div {...props}>
    <List<NavbarLink> className={listClassName} items={navbarLinks}>
      {(link, index) => (
        <li key={index} className={listItemClassName}>
          <Link href={link.href}>
            <a className={listItemLinkClassName}>{link.label}</a>
          </Link>
        </li>
      )}
    </List>
  </div>
);

Navbar.defaultProps = {
  className: 'bg-dark-blue',
  listClassName: 'list ma0 pa0 flex',
  listItemClassName: 'db ma2',
  listItemLinkClassName: 'white hover-gold no-underline',
};

export default React.memo(Navbar);
