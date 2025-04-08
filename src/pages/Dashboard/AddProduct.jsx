import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, message } from "antd";
import { addProduct, getProduct } from "../../services/Api/product";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../../redux/slices/shoppingCart";

const categoryOptions = [
  "Technology",
  "Business",
  "Management",
  "Chemistry",
  "Advance Learning",
];

const AddProduct = ({ onAddSuccess }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Add Successful!");

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await addProduct({
        name: values.name,
        author: values.author,
        price: Number(values.price),
        category: values.category,
        img: values.img,
        numOfStudent: Number(values.numOfStudent),
        video: values.video,
        description: values.description,
      });

      notify();

      // dispatch(addItem(response));
      handleGetData();

      form.resetFields();
      if (onAddSuccess) {
        setTimeout(() => {
          onAddSuccess();
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to add product");
    }
  };

  const handleGetData = async () => {
    try {
      const { data } = await getProduct();
      dispatch(addItem(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  // Danh sách các trường bạn muốn hiển thị làm nhãn cho các ô input
  const fieldsToDisplay = [
    "name",
    "author",
    "price",
    "category",
    "img",
    "numOfStudent",
    "video",
    "description",
  ];

  return (
    <div>
      <h1>Add New Course</h1>
      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        form={form}
        initialValues={{
          Name: "",
          Author: "",
          Price: 0,
          Category: "Technology",
          Img: "",
          numOfStudent: 0,
          Video: "",
          description: "",
        }}
      >
        {fieldsToDisplay.map((fieldName) => (
          <Form.Item
            label={fieldName}
            key={fieldName}
            name={fieldName}
            labelAlign="left"
            labelCol={{
              span: 24,
            }}
            rules={[
              {
                required: true,
                message: `${fieldName} is required`,
              },
            ]}
          >
            {fieldName === "category" ? (
              <Select>
                {categoryOptions.map((category) => (
                  <Select.Option key={category} value={category}>
                    {category}
                  </Select.Option>
                ))}
              </Select>
            ) : fieldName === "img" || fieldName === "numOfStudent" ? (
              <Input />
            ) : (
              <Input />
            )}
          </Form.Item>
        ))}

        <Form.Item label=" " colon={false}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: "0px" }}
          >
            Submit
          </Button>
        </Form.Item>
        <ToastContainer
          position="top-right"
          autoClose={1300}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Form>
    </div>
  );
};

export default AddProduct;
