export type Params = { [index: string]: string }

export type UsersT = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type ProductsT = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type PurchaseT = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}