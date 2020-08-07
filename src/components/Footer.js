import React from 'react';
import propTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';

const Footer = ({ count, setCount, length }) => {
  const changeQuestion = () => {
    if (count < length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      style={{ justifyContent: 'center', cursor: 'pointer', height: '100px' }}
      fixed="bottom"
      onClick={changeQuestion}
    >
      <div style={{ color: 'white' }}>Next Question</div>
    </Navbar>
  );
};

Footer.propTypes = {
  count: propTypes.number.isRequired,
  length: propTypes.number.isRequired,
  setCount: propTypes.func.isRequired,
};

export default Footer;
