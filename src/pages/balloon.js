import React, { useEffect } from "react";
import PropTypes from 'prop-types';

function Circle(props) {
  const { position, size, color, id, onClick, onDelete } = props;

  const handleClick = () => {
    onClick(id);
  };

  if (position.y < (3.5 * -size)) {
    onDelete(id);
  }

  return (
    <>
      <circle
        cx={position.x}
        cy={position.y}
        r={size}
        fill={color}
        onClick={handleClick}
      />
      <line
        x1={position.x}
        y1={position.y + size}
        x2={position.x}
        y2={position.y + (2.5 * size)}
        stroke="black"
        strokeWidth="2"
      />
    </>
  );
}

Circle.propTypes = {
  size: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

function CircleRain() {
  const [circles, setCircles] = React.useState([]);

  const addCircle = () => {
    const newCircle = {
      id: Date.now(),
      size: Math.floor(Math.random() * 40) + 20,
      color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
      position: {
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 60,
      }
    };
    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  const deleteCircle = (id) => {
    setCircles((prevCircles) =>
      prevCircles.filter((circle) => circle.id !== id)
    );
  };

  const handleCircleClick = (id) => {
    deleteCircle(id);
  };

  useEffect(() => {
    const interval = setInterval(addCircle, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => ({
          ...circle,
          position: {
            x: circle.position.x,
            y: circle.position.y - 1
          }
        }))
      );
    };

    const interval = setInterval(updatePositions, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{backgroundColor: "#00BFFF", position: "fixed", left: "0px", top: "0px", width: "100vw", height: "100vh"}}>
      <svg height={window.innerHeight} width={window.innerWidth}>
        {circles.map((circle) => (
          <Circle
            key={circle.id}
            id={circle.id}
            size={circle.size}
            color={circle.color}
            onClick={handleCircleClick}
            onDelete={deleteCircle}
            position={circle.position}
          />
        ))}
      </svg>
    </div>
  );
}

export default CircleRain;
