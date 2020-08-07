import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, Container, TimerButtons, Footer, Progress } from './components';
import questions from './questions';

const App = () => {
  const shuffledQuestions = questions;

  const [time, setTime] = useState(10);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimer(0);
    const startTime = new Date().getTime();
    const interval = setInterval(() => {
      if (new Date().getTime() - startTime > time * 1001) {
        clearInterval(interval);
        return;
      }
      setTimer((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count, time]);

  return (
    <>
      <Header />
      <Container style={{}}>
        <div
          style={{
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '50vh',
          }}
        >
          <TimerButtons time={time} setTime={setTime} />
          <div style={{ display: 'grid', gridTemplatemplateColumns: '1fr', gridGap: '75px' }}>
            <h5 style={{ textAlign: 'center', marginLeft: '6%', marginRight: '6%' }}>
              {shuffledQuestions[count]}
            </h5>
            <div style={{ width: '50%', marginLeft: '25%', marginRight: '25%' }}>
              <Progress
                variant="dark"
                now={(timer / time) * 100}
                style={{ height: '3px' }}
                animated
              />
              <p style={{ textAlign: 'center', color: 'rgb(120, 120, 120)', marginTop: '10px' }}>
                {`${timer} seconds`}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer count={count} setCount={setCount} length={shuffledQuestions.length} />
    </>
  );
};

export default App;
