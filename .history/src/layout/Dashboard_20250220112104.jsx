import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { useSelector, useDispatch } from "react-redux";



const { Header, Sider, Content } = Layout;

const manage = [
  {
    id: 1,
    name: "Add",
  },
  {
    id: 2,
    name: "Update",
  },
  {
    id: 3,
    name: "All List",
  },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Add");
  const [edit, setEdit] = useState("Add");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  data = useSelector((state) => state.data);


  useEffect(() => {

    console.log(data);
  }, []);

  const { token } = theme.useToken();
  const colorBgContainer = token.colorBgContainer;

  return (
    <Layout style={{ height: "auto" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "auto" }}
      >
        <div className="demo-logo-vertical" />
        <NavLink to={"/"} className="ml-2 text-back">
          Back Home
        </NavLink>

        <div className="d-flex flex-column pl-1 pr-1 pt-3 gap-2">
          {manage.map((item) => (
            <span
              onClick={() => setActive(item.name)}
              className={`p-2 rounded cursor-pointer-menu ${
                active === item.name ? "activeDashboard" : ""
              }`}
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <span
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              fontWeight: "bold",
              color: "#0b0b0b6",
              paddingLeft: "5px",
            }}
          >
            Management (Dashboard)
          </span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {active === "Add" ? handleAddData() : null}
          {active === "Update" ? "" : null}
          {active === "All List" ? (
            <ul
              style={{
                margin: "0px 16px 20px 16px",
                padding: 24,
                minHeight: "72vh",
                background: colorBgContainer,
              }}
            >
              <div
                className="mb-3"
                style={{ textAlign: "center", fontWeight: "700" }}
              >
                LIST PRODUCTS
              </div>
              <div className="container">
                <div className="row">
                  {data.map((item, index) => (
                    <div key={index} className="col-sm-6 col-xl-4">
                      <div className="course-style1 has-border">
                        <div className="course-img">
                          <a href="data-details.html">
                            <img
                              className="w-100"
                              src={item.img}
                              alt="Course Img"
                            />
                          </a>
                          <div className="course-category">
                            <a href={item.category}>{item.category}</a>
                          </div>
                          <a
                            href={item.videoLink}
                            className="vs-btn style2 popup-video"
                          >
                            <i className="fas fa-play"></i>Preview Course
                          </a>
                        </div>
                        <div className="course-content">
                          <div className="course-top">
                            <div className="course-review">
                              {[...Array(item.rate)].map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                              ))}
                              <span>({item.rate})</span>
                            </div>
                            <span className="course-price">
                              {formatPrice(item.price)} VND
                            </span>
                          </div>
                          <h3 className="h5 course-name">
                            <a href="data-details.html" className="text-inherit">
                              {item.name}
                            </a>
                          </h3>
                          <div className="course-teacher">
                            <a
                              className="text-inherit"
                              href={item.authorLink}
                            >
                              By {item.author}
                            </a>
                          </div>
                        </div>
                        <div className="course-meta">
                          <span>
                            <i className="fal fa-users"></i>
                            {item.numOfStudent}
                          </span>
                          <span>
                            <i className="fal fa-clock"></i>
                            {item.time}
                          </span>
                          <span id="buy">
                            Buy
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              style={{ marginLeft: "10px" }}
                            >
                              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                            </svg> */}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ul>
          ) : null}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
