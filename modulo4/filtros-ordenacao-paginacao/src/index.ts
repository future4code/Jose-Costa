import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get("/getAllUsers/", getAllUsers);
app.get("/getAllUsers/:sort/:order/:page", getAllUsers);

