import { app } from "./app";
import { createProduct } from "./endpoints/products/createProduct";
import { getAllProducts } from "./endpoints/products/getAllProducts";
import { getUserPurchases } from "./endpoints/users/getUserPurchases";
import { registerPurchase } from "./endpoints/purchases/registerPurchase";
import { createUser } from "./endpoints/users/createUser";
import { getAllUsers } from "./endpoints/users/getAllUsers";

app.post("/users", createUser);
app.post("/products", createProduct);

app.get("/users", getAllUsers);
app.get("/users/:user_id/purchases", getUserPurchases);
app.get("/products", getAllProducts);

app.post("/purchases", registerPurchase);

