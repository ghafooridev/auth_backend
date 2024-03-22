import express from "express";
import http from "http"
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import router from "./router/user";
import { errorHandler } from "./middleware/error";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router)
app.use(errorHandler)


const server = http.createServer(app);

server.listen(8080, () => console.log('server is running....'))