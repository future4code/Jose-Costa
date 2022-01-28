import data from "./data/data.json";

export const generateId = (): number => {
    let lastId = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id > lastId) {
            lastId = data[i].id
        }
    }
    return lastId + 1;
}

export const checkProductName = (newProduct: string): boolean => {
    if (typeof newProduct !== "string") { return true }
    let productAlreadyExists = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === newProduct) {
            productAlreadyExists = true;
        }
    }
    return productAlreadyExists;
}

export const checkProductId = (id: number): boolean => {
    let productIdAlreadyExists = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            productIdAlreadyExists = true;
        }
    }
    return productIdAlreadyExists;
}

export const checkPrice = (price: number): boolean => {
    if (isNaN(price) || price < 1) {
        return true;
    } else {
        return false;
    }

}