import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Проект "Медбрат", все права защищены.
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
