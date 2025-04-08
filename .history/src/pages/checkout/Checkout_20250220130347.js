const API = 'https://fe21-db.vercel.app/educino';

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
