import { app } from "./app";
import { endpointInicial } from "./endpoints/endpointInicial";

app.get("/inicio", endpointInicial);