import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, message } from "antd";
import { editProduct, getProduct } from "../../services/Api/product";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../../redux/slices/shoppingCart";

const { Option } = Select;
const categoryOptions = ['Technology', 'Business', 'Management', 'Chemistry', 'Advance Learning'];

const EditProduct = ({ product, onEditSuccess }) => {
  const dispatch = useDispatch();
  const notify = () => toast("Edit Successful!");

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await editProduct({
        _id: product._id,
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
      handleGetData();
      form.resetFields();
      if (onEditSuccess) {
        setTimeout(() => {
          onEditSuccess();
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to edit product");
    }
  };

  const handleGetData = async () => {
    try {
      const { data } = await getProduct();

      dispatch(addItem(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      name: product.name,
      author: product.author,
      price: product.price,
      category: product.category,
      img: product.img,
      numOfStudent: product.numOfStudent,
      video: product.video,
      description: product.description,
    });

    handleGetData();
  }, [product, form]);

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
      <h1>Edit Product</h1>
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
      >
        <div
          style={{
            fontWeight: "800",
            textAlign: "center",
            width: "127px",
            marginBottom: "15px",
          }}
        >
          Edit Product
        </div>
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

export default EditProduct;
