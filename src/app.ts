import env from "dotenv";

import dbConnection from "./config/database";
import Server from "./config/server";

// configure enviroment
env.config();

// connect to database
dbConnection();

// start express server
new Server().listen();
