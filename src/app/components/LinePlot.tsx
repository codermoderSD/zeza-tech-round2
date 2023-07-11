"use client";

import React, { FC, useRef, useState } from "react";
import Plot from "react-plotly.js";
import { getRandomInteger } from "../page";

interface LinePlotProps {
  n: number;
}

interface TraceProps {
  x: number[];
  y: number[];
  type: string;
}

const LinePlot: FC<LinePlotProps> = ({ n }) => {
  // state for showing the plot in fullscreen
  const [show, setShow] = useState(false);
  // state for the data of the plot in fullscreen
  const [fsData, setFsData] = useState({});

  // logic for generating the data for the coordinates => 1 to n*100
  const handleCoData = () => {
    const coData: number[] = [];
    let n = getRandomInteger(4, 12);
    for (let i = 0; i < n * 100; i++) {
      coData.push(i);
    }
    return coData;
  };

  // logic for generating the data for the plot => data[trace_1, trace_2, ..., trace_n]
  const data: Array<TraceProps> = [];
  for (let i = 1; i <= n; i++) {
    let trace = {
      x: handleCoData(),
      y: handleCoData(),
      type: "scatter",
    };
    data.push(trace);
  }

  // when show in fullscreen button is clicked
  const handleFullPlot = (i: number) => {
    setFsData(data[i]);
    setShow(true);
  };

  return (
    <>
      <h1>Here are the {n} graphs</h1>
      <div className="grid">
        {data?.map((trace, i) => (
          <div key={i} className="container">
            <Plot data={[trace]} layout={{ width: 430, height: 323 }} />
            <button className="btn" onClick={() => handleFullPlot(i)}>
              View in fullscreen
            </button>
          </div>
        ))}
      </div>
      {show && (
        <div className="fullscreen">
          <Plot data={[fsData]} layout={{ width: 650, height: 488 }} />
          <button className="btn" onClick={() => setShow(false)}>
            Exit fullscreen
          </button>
        </div>
      )}
    </>
  );
};

export default LinePlot;
