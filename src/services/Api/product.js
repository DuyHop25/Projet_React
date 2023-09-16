import HttpRequire from "../Https";

export const getProduct = async (params) => {
    const data = await HttpRequire.get("/educino",{
        params
    })
    return data;
}


export const addProduct = async (name,rate,author,price,category,discount) => {
   await HttpRequire.post("/educino/add", {
        
   })
};

export const deleteProduct = async (id) => { 
    await HttpRequire.delete("/educino", {})
}

export const editProduct = async (id , item ) => {
}

