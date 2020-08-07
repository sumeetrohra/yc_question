import React from 'react';
import propTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const TimerButtons = ({ time, setTime }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonGroup style={{ width: '80%' }}>
        <Button variant={time === 10 ? 'dark' : 'light'} onClick={() => setTime(10)}>
          10 seconds
        </Button>
        <Button variant={time === 15 ? 'dark' : 'light'} onClick={() => setTime(15)}>
          15 seconds
        </Button>
      </ButtonGroup>
    </div>
  );
};

TimerButtons.propTypes = {
  time: propTypes.number.isRequired,
  setTime: propTypes.func.isRequired,
};

export default TimerButtons;
