import { useState, useEffect } from 'react';

const RealTimeClock = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='Exercicio4'>
      <h1>Relógio Digital</h1>
      <p>{time}</p>
    </div>
  );
};

export default RealTimeClock;
