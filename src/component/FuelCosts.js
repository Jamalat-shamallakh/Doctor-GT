import React, { useState } from "react";
import { Divider } from "antd";
import { Line } from "@ant-design/charts";
import { useMediaQuery } from "react-responsive";
export const FuelCosts = () => {
  const data = [
    { month: "Jan", value: 30000 },
    { month: "Feb", value: 110000 },
    { month: "Mar", value: 60000 },
    { month: "Apr", value: 80000 },
    { month: "May", value: 70000 },
    { month: "Jun", value: 90000 },
    { month: "Jul", value: 90000 },
    { month: "Sep", value: 110000 },
    { month: "Nov", value: 70000 },
  ];
  const config = {
    data,
    height: 400,
    xField: "month",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        // maxWidth: "80%",
        margin: "0 auto",
      }}>
      <h2>Fuel Costs</h2>
      <Divider />
      <h4>Average Fuel Consumption </h4>
      <h2> 28.6L/100km</h2>
      <h4> Fuel Cost</h4>
      <h2> $70.000 </h2>
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "space-evenly",
      //   flexWrap: "wrap",
      // }}
      >
        <Line {...config} />;
      </div>
    </div>
  );
};
