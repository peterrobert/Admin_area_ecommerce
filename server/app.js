import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from 'morgan'
import cors from 'cors'
import dotenv from "dotenv"

import connectToDatabase from "./databaseConnection.js"
import clientRoutes from "./routes/client.js"
import managementRoutes from "./routes/management.js"
import generalRoutes from "./routes/general.js"
import salesRoutes from "./routes/sales.js"

/* === CONFIGURATION === */
dotenv.config()
const app = express();
app.use(express.json())
app.use(helmet());
// This allows us to make cross origin requests. This you need if you want to make api calls from another server
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
// === check what this does
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

/* === ROUTES === */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/sales", salesRoutes);
app.use("/management", managementRoutes);

/* === DATABASE CONNECTION === */

connectToDatabase();

/* === SERVER CONNECTION === */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("listening to port " + PORT)
})

