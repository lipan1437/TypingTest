import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTimer } from '../redux/action';


function Timer() {
  const [seconds, setSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(true);
  const dispatch = useDispatch();
  const keysPressed = useSelector(state => state.keysPressed);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    dispatch(updateTimer(seconds));
    
    if (seconds === 0 || keysPressed === 5 * 60) {
      setIsRunning(false);
    }
  }, [seconds, dispatch, keysPressed]);

  return (
    <p>Timer: {seconds}</p>
  );
}

export default Timer;
