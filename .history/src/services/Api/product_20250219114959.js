  import HttpRequire from "../Https";

  export const getProduct = async (params) => {
    try {
      const data = await HttpRequire.get("/educino", { params });
      // const data = await HttpRequire.get("https://fe21-db.vercel.app/educino");
      return data;
      
      
    } catch (error) {
      // Handle the error, e.g., log it or throw it to be caught higher up in your code
      throw error;
    }
  };

    export const getDetailProduct = async (id) => {
      try {
        const data = await HttpRequire.get(`/educino/${id}`);
        return data;
      } catch (error) {
        throw error;
      }
    };

  export const addProduct = async (product) => {
    try {
      const payload = {
        name: product.name,
        author: product.author,
        price: product.price,
        category: product.category,
        img: product.img,
        numOfStudent: product.numOfStudent,
        video: product.video,
        description: product.description
      };
      const { data } = await HttpRequire.post("/educino/add", payload);
      return data; // Assuming the response contains the added product data
    } catch (error) {
      // Handle the error
      throw error;
    }
  };



  export const deleteProduct = async (id) => {
    try {
      const data = await HttpRequire.delete(`/educino/${id}`);
      return {data}; // Assuming the response contains a success message or confirmation
    } catch (error) {
      // Handle the error
      throw error;
    }
  };

  export const editProduct = async (product) => {
    try {
      const payload = {
        name: product.name,
        author: product.author,
        price: product.price,
        category: product.category,
        img: product.img,
        numOfStudent: product.numOfStudent,
        video: product.video,
        description: product.description,
      };
      console.log(product.img);
      console.log(product.price);
      console.log(product.numOfStudent);

      const { data } = await HttpRequire.put(`/educino/${product._id}`, payload); // Sử dụng product._id thay vì _id
      return data; // Assuming the response contains the edited product data
    } catch (error) {
      // Handle the error
      throw error;
    }
  };







