import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";
require('dotenv').config();




let app = express();
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

initWebRoutes(app);


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('BackEnd NodeJS is running on the port: ', port);
})