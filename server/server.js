import express from "express";
import * as dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/db.js";
import { notFound,errorHandler } from "./middleware/errormiddleware.js";
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
 
const app = express(); 
 

 
dotenv.config();

app.use(express.json())
app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)

app.use(errorHandler)

connectDb();

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow));
