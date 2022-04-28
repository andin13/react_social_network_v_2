import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

const navbarItems = [
  { name: 'Profile', url: '/profile' },
  { name: 'Messages', url: '/dialogs' },
  { name: 'Users', url: '/users' },
  { name: 'News', url: '/news' },
  { name: 'Music', url: '/music' },
  { name: 'Settings', url: '/settings' },
];

function Navbar(): JSX.Element {
  const NavbarItemsComponents = navbarItems
    .map((ni) => (
      <NavLink
        to={ni.url}
        key={ni.name}
        className={
          (navData) => (
            navData.isActive
              ? classes.active
              : classes.item
          )
        }
      >
        {ni.name}
      </NavLink>
    ));

  return (
    <nav className={classes.nav}>
      {NavbarItemsComponents}
      <div className={classes.FL} />
    </nav>
  );
}

export default Navbar;
