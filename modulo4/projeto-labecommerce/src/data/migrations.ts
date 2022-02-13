import connection from "./connection";
import users from "./users.json";
import products from "./products.json";

const createTables = async () => {
    try {
        await connection.raw(`
        CREATE TABLE labecommerce_users (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );

        CREATE TABLE labecommerce_products (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            name VARCHAR(255) NOT NULL,
            price FLOAT DEFAULT 0,
            image_url VARCHAR(255) NOT NULL
        );

        CREATE TABLE labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            user_id VARCHAR(255) NOT NULL, FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            product_id VARCHAR(255) NOT NULL, FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
            quantity INT NOT NULL,
            total_price FLOAT NOT NULL
        );
        `);
        console.log("Tabelas criadas com sucesso!");
    } catch (err: any) {
        console.log(err.sqlMessage);
    }
}

const inserUsers = async () => {
    try {
        await connection("labecommerce_users").insert(users);
        console.log("Usuários inseridos.")
    } catch (err: any) {
        console.log(err.sqlMessage)
    }
}

const inserProducts = async () => {
    try {
        await connection("labecommerce_products").insert(products);
        console.log("Produtos inseridos.")
    } catch (err: any) {
        console.log(err.sqlMessage)
    }
}

const insertPurchase = async () => {
    try {
        await connection.raw(`
        INSERT INTO labecommerce_purchases values ("1660cd9e-f61b-49de-b80c-asd-af9dd542", "0a4147ad-30dd-4547-9e35-94e655d02f13",
        "0a4147ad-30dd-4547-9e35-94e655d02f11", 1, 600);
        
        INSERT INTO labecommerce_purchases values ("1660cd9e-f61b-49de-asda-asd-a889d542", "0a4147ad-30dd-4547-9e35-94e655d02f13",
        "4d3bc362-f838-43d6-9e06-5f3883873f72", 2, 200);
        `);
        console.log("Dois registros de compras adicionados para testes.")
    } catch (err: any) {
        console.log(err.sqlMessage)
    }
}

const closeConnection = () => { connection.destroy() }

createTables()
    .then(inserUsers)
    .then(inserProducts)
    .then(insertPurchase)
    .finally(closeConnection);