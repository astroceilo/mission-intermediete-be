import dotenv from "dotenv";
dotenv.config();

import { validateEnv } from "./env.validator.js";
validateEnv();

const config = {
  port: Number(process.env.PORT),
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
};

export default config;
