//import all the required dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

//import the database connection
import connectDB from "./utilities/connectDB.js";

//import routes
import authRoute from "./routes/authRoute.js";

//configure dotenv to manage environment
dotenv.config();

//create an instance of express
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//setup middleware to use routes
app.use("/api/v1/auth", authRoute);

//define a route handler for the root URL
app.all("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Express server!" });
});

//connect db and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
