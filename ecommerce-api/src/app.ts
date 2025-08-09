import express from "express"
import "dotenv/config";
import cors from 'cors'
import { router } from "./routes";
import bodyParser from "body-parser";
import { JSONParseError } from "./shared/middleware";
// import "./shared/services/TranslationsYup";
import "./associations"

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(JSONParseError)
app.use(router);

export {app};