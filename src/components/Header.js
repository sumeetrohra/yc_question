import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" style={{ justifyContent: 'center' }} fixed="top">
      <Navbar.Brand style={{ margin: 0 }}>YC Questions</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
