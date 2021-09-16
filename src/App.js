import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Col, Row } from "antd";
import { CarOutlined } from "@ant-design/icons";
import { VehiclesConditions } from "./component/VehiclesConditions";
import { FuelCosts } from "./component/FuelCosts";
import "antd/dist/antd.css";
import "./App.css";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
          <div
            className="logo"
            style={{ color: "wheat", textAlign: "center", marginTop: "10px" }}>
            DOCTOR GT
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <SubMenu
              key="SubMenu"
              icon={<CarOutlined />}
              title="Vehicles Status">
              <Menu.Item>
                <Link to="#">
                  <Row gutter={24}>
                    <Col span={12}>Active </Col>
                    <Col span={12} style={{ textAlign: "center" }}>
                      <span
                        style={{
                          background: "green",
                          border: "green",
                          padding: "2px 7px",
                          borderRadius: "50%",
                        }}>
                        3
                      </span>
                    </Col>
                  </Row>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">
                  <Row gutter={24}>
                    <Col span={12}>Inactive </Col>
                    <Col span={12} style={{ textAlign: "center" }}>
                      <span
                        style={{
                          background: "blue",
                          border: "blue",
                          padding: "2px 7px",
                          borderRadius: "50%",
                        }}>
                        1
                      </span>
                    </Col>
                  </Row>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">
                  <Row gutter={24}>
                    <Col span={12}> In Shop </Col>
                    <Col span={12} style={{ textAlign: "center" }}>
                      <span
                        style={{
                          background: "#966d23",
                          border: "#966d23",
                          padding: "2px 7px",
                          borderRadius: "50%",
                        }}>
                        1
                      </span>
                    </Col>
                  </Row>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<CarOutlined />}>
              <Link to="/vehicles-condtions"> Vehicles Conditions</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CarOutlined />}>
              <Link to="/fuel-costs"> Fuel Costs</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <Switch>
              <Route path="/fuel-costs" component={FuelCosts} />
              <Route
                path="/vehicles-condtions"
                component={VehiclesConditions}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
