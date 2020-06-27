import React, { useEffect } from 'react';
import './DashBoard.css';

const DashBoard = () => {

  useEffect(() => {
    load();

  }, []);

  const load = () => {
    window.chartsFunction();
  }

  return (
    <div className="container" >
      <h1>DashBoard</h1>
      <canvas id="myChart"  ></canvas>
    </div>
  );
}

export default DashBoard;