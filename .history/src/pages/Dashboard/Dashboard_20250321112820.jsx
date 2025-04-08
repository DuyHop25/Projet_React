import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme, Row, Col, message } from "antd";
import { deleteProduct, getProduct } from "../../services/Api/product";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/shoppingCart";
import '../../assets/css/dashboard.css'

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
    name: "All",
  },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("All");
  const [data, setData] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Thêm trạng thái để kiểm tra xem đang trong chế độ chỉnh sửa hay không

  const dispatch = useDispatch();

  const handleGetData = async () => {
    try {
      const { data } = await getProduct();
      setData(data);
      dispatch(addItem(data));
    } catch (error) {
      console.error("Lỗi khi truy xuất dữ liệu:", error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      await deleteProduct(id);
      handleGetData();
      // Hiển thị thông báo thành công
      message.success("Deleted successfully");
    } catch (error) {
      console.error("Lỗi:", error);
      message.error("Deleted successfully");
    }
  };

  const handleSetActive = (newActive) => {
    setActive(newActive);
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setIsEditing(true); 
    setActive("Update"); 
  };

  const handleFinishEditing = () => {
    setIsEditing(false); 
    setActive("All"); 
  };

  const handleAfterEdit =  () => {
    handleFinishEditing(); 
    handleGetData(); 
  };
  
  useEffect(() => {
    setActive("All");
    handleGetData();
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "auto" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "auto" }}
      >
        <div className="demo-logo-vertical" />
        <NavLink to={"/home"} className="ml-2 text-back">
          Home Page
        </NavLink>

        <div className="d-flex flex-column justify-content-center pl-1 pr-1 pt-3 gap-2 Menu_item">
          {manage.map((item) => (
            <span
              key={item.id}
              onClick={() => setActive(item.name)}
              className={
                active === item.name
                  ? "p-2 rounded cursor-pointer-menu activeDashboard"
                  : "p-2 rounded cursor-pointer-menu"
              }
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
            Manager (Dashboard)
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
          {active === "Add" ? (
            <AddProduct
              onAddSuccess={() => {
                handleSetActive("All");
                handleGetData();
              }}
            />
          ) : (
            <>
              {active === "Update" ? (
                <>
                  {isEditing ? (
                    <EditProduct
                      product={editProduct}
                      onEditSuccess={handleAfterEdit}
                    />
                    
                  ) : (
                    <div>
                      <div
                        className=""
                        style={{ textAlign: "center", fontWeight: "700" , fontSize: "2rem"}}
                      >
                        DANH SÁCH KHÓA HỌC
                      </div>
                      <ul class="course-list"
                        style={{
                          margin: "0px 16px 20px 16px",
                          padding: 24,
                          minHeight: "72vh",
                          background: colorBgContainer,
                        }}
                      >
                        {data && data.length > 0 && (
                      <li className="Th">
                        <Row className="Row" justify="space-between">
                          <Col className="Row_th" span={1}>#</Col>
                          <Col className="Row_th" span={5}>Tên khóa học</Col>
                          <Col className="Row_th" span={3}>Giáo viên</Col>
                          <Col className="Row_th" span={2}>Giá</Col>
                          <Col className="Row_th" span={2} style={{textAlign: "center"}}><i class="fa fa-pencil" aria-hidden="true"></i></Col>
                          <Col className="Row_th" span={2} style={{textAlign: "center"}}><i class="fa fa-trash" aria-hidden="true"></i></Col>
                        </Row>
                         </li>
                        )}
                        {data &&
                          data.map((item, i) => (
                            <li  className='table'key={item.id}>
                              <Row className="Row"justify="space-between">
                                <Col className="Col" span={1}>{i + 1}</Col>
                                <Col className="Col" span={5}>{item.name}</Col>
                                <Col className="Col" span={3}>{item.author}</Col>
                                <Col className="Col" span={2}>${item.price}</Col>
                                <Col className="Col" span={2}>
                                  <Button
                                    className="edit_List"
                                    onClick={() => handleEditProduct(item)}
                                  >
                                    Sửa
                                  </Button>
                                  
                                </Col>
                                <Col className="Col" span={2}>
                                <Button
                                    className="delete_List"
                                    onClick={() => handleDeleteData(item._id)}
                                  >
                                    Xóa
                                  </Button>
                                  </Col>

                              </Row>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : active === "All" &&(
                <div>
                  <div
                    className="mb-3"
                    style={{ textAlign: "center", fontWeight: "700" }}
                  >
                    DANH SÁCH KHÓA HỌC
                  </div>
                  <ul className="course-list"
                    style={{
                      margin: "0px 16px 20px 16px",
                      padding: 24,
                      minHeight: "72vh",
                      background: colorBgContainer,
                    }}
                  >
                    {data && data.length > 0 && (
                      <li className="Th">
                        <Row className="Row"justify="space-between">
                          <Col className="Row_th" span={1}>#</Col>
                          <Col className="Row_th" span={6}>Tên khóa học</Col>
                          <Col className="Row_th" span={3}>Giáo viên</Col>
                          <Col className="Row_th" span={3}>Danh mục</Col>
                          <Col className="Row_th" span={3}>Học viên</Col>
                          <Col className="Row_th" span={2}>Giá</Col>
                        </Row>
                      </li>
                    )}
                    {data &&
                      data.map((item, i) => (
                        <li  className='table'key={item.id}>
                          <Row className="Row"justify="space-between">
                            <Col className="Col" span={1}>{i + 1}</Col>
                            <Col className="Col" span={6}>{item.name}</Col>
                            <Col className="Col" span={3}>{item.author}</Col>
                            <Col className="Col" span={3}>{item.category}</Col>
                            <Col className="Col" span={3}>{item.numOfStudent}</Col>
                            <Col className="Col" span={2}>${item.price}</Col>
                          </Row>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
