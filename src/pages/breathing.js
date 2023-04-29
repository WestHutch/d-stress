import React from 'react';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './breathing.css';

const Breathing = () => {

  const [shouldDrawThree, setShouldDrawThree] = useState(true);
  const [shouldDrawFour, setShouldDrawFour] = useState(true);
  const [msg, setMsg] = useState("Inhale");
  let intervalCounter = 0;

  const [line1, setLine1] = useSpring(() => ({
    from: { length: 0 },
    to: { length: 300 },
    config: { duration: 4000 },
    onRest: () => setLine2({ from: {length: 0}, to: { length: 300 }, config: { duration: 4000 } }),
  }));

  const [line2, setLine2] = useSpring(() => ({
    from: { length: 0 },
    to: { length: 300 },
    config: { duration: 8000 },
    delay: 4000,
    onRest: () => setLine3({ from: {length: 300}, to: { length: 0 }, config: { duration: 4000 } }),
  }));

  const [line3, setLine3] = useSpring(() => ({
    from: { length: 300 },
    to: { length: 0 },
    config: { duration: 12000 },
    delay: 8000,
    onRest: () => {
      setLine4({ from: {length: 300}, to: { length: 0 }, config: { duration: 4000 } });
    },
  }));

  const [line4, setLine4] = useSpring(() => ({
    from: { length: 300 },
    to: { length: 0 },
    config: { duration: 16000 },
    delay: 12000,
    onRest: () => {
      setLine1();
    }
  }));

  useEffect(() => {
    const intervalShort = setInterval(() => {
      intervalCounter++;
      if(intervalCounter > 3) {
        //console.log("interval was ", intervalCounter ," resetting to 0");
        intervalCounter = 0;
      }
      //console.log("before the switch, it is ", intervalCounter);
      //setShouldDrawThree(shouldDrawThree => !shouldDrawThree);
      switch(intervalCounter) {
      case 0:
        setShouldDrawThree(false);
        setShouldDrawFour(false);
        setMsg("Inhale");
        break;
      case 1:
        setShouldDrawThree(false);
        setShouldDrawFour(false);
        setMsg("Hold");
        break;
      case 2:
        setShouldDrawThree(true);
        setShouldDrawFour(false);
        setMsg("Exhale");
        break;
      case 3:
        setShouldDrawThree(true);
        setShouldDrawFour(true);
        setMsg("Hold");
        break;
      }

      
    },4000);
    const intervalId = setInterval(() => {
      // Reset the animation every 16 seconds
      setLine2({
        from: { length: 300 },
        to: { length: 0 },
        config: { duration: 0 },
        delay: 0,
        onRest: () => {
        }
      });
      setLine3({
        from: { length: 300 },
        to: { length: 0 },
        config: { duration: 0 },
        delay: 0,
        onRest: () => {
        }
      });
      setLine4({
        from: { length: 0 },
        to: { length: 300 },
        config: { duration: 0 },
        delay: 0,
        onRest: () => {
        }
      });

      setLine1({
        from: { length: 0 },
        to: { length: 300 },
        config: { duration: 4000 },
        delay: 0,
        onRest: () => {
        }
      });
    }, 16000);
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalShort);
    };
  }, []);

  return (
    <>
      <svg width="300" height="300">
        <animated.line
          x1={0}
          y1={0}
          x2={line1.length}
          y2={0}
          stroke="white"
          strokeWidth="12"
        />
        <animated.line
          x1={300}
          y1={0}
          x2={300}
          y2={line2.length}
          stroke="white"
          strokeWidth="12"
        />
        {shouldDrawThree && (
          <>
            <animated.line
              x1={300}
              y1={300}
              x2={line3.length}
              y2={300}
              stroke="white"
              strokeWidth="12"
            />
          </>
        )}
        {shouldDrawFour && shouldDrawThree && (
          <>
            <animated.line
              x1={0}
              y1={300}
              x2={0}
              y2={line4.length}
              stroke="white"
              strokeWidth="12"
            />
          </>
        )}
      </svg>
      <div className="textWrap">
        <p className="bigText">
          {msg}
        </p>
      </div>
      <div className="bottomPortion">
        
      </div>
    </>
  );
};

export default Breathing;
