import React, { useState } from "react";
import { Progress, Card, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
export const VehiclesConditions = () => {
  const [vehiclesConditions, setVehiclesConditions] = useState([
    {
      state: "Good",
      percntage: 58,
      vehiclesNum: 52,
      strokeColor: "green",
    },
    {
      state: "Satisfatory",
      percntage: 27,
      vehiclesNum: 14,
      strokeColor: "#faad14",
    },
    {
      state: "Critical",
      percntage: 15,
      vehiclesNum: 7,
      strokeColor: "red",
    },
  ]);
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: isMobile ? 0 : "40px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      <h2>Vehicles Conditions</h2>
      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "left",
          flexWrap: "wrap",
        }}>
        {vehiclesConditions.map((vehicle) => (
          <Card
            hoverable
            style={{
              alignContent: "center",
              textAlign: "center",
              marginRight: isMobile ? 0 : "50px",
              marginBottom: isMobile ? "20px" : 0,
            }}
            title={
              <Col>
                <Col
                  style={{
                    margin: "20px 0",
                    textAlign: "center",
                    width: "100%",
                  }}>
                  <h3
                    style={{ textAlign: "center", color: vehicle.strokeColor }}>
                    {vehicle.state}
                  </h3>
                </Col>
                <Row>
                  <Progress
                    strokeColor={vehicle.strokeColor}
                    type="circle"
                    percent={vehicle.percntage}
                    status={vehicle.state}
                  />
                </Row>
              </Col>
            }
            bordered={true}>
            <Col>
              <h2 style={{ fontWeight: "bold" }}>{vehicle.vehiclesNum} </h2>
              <h3>vehicles </h3>
            </Col>
          </Card>
        ))}
      </div>
    </div>
  );
};
