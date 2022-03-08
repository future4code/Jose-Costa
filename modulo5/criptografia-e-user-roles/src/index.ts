import { app } from "./app";
import { login } from "./controllers/login";
import { profile } from "./controllers/profile";
import { signup } from "./controllers/signup";

app.post("/user/signup", signup);
app.post("/user/login", login);
app.get("/user/profile", profile);