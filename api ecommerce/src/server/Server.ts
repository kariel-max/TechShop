import express from "express"
import "dotenv/config";
import cors from 'cors'
import { router } from "./routes";
import bodyParser from "body-parser";
import { JSONParseError } from "./shared/middleware";
import "./shared/services/TranslationsYup";

const server = express();
server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(JSONParseError)
server.use(router);

export {server};