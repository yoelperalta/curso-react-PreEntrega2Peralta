import productos from "../products.json"

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos);
        }, 500);
    });
}

export const getProductsByCategory = (productCategory) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.category == productCategory));
        }, 500);
    });
}

export const getProductsById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id == productId));
        }, 500);
    });
}