//import all the required dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

//import the database connection
import connectDB from "./utilities/connectDB.js";


//configure dotenv to manage environment
dotenv.config();

//create an instance of express
const app = express();
const PORT = process.env.PORT || 3000;


/******** This code helps to resolve route issues from backend to frontend *******/
const allowedOrigins = [process.env.BACKEND_URL || 'http://localhost:3000', process.env.FRONTEND_URL || 'http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: origin not allowed'));
    }
  }
};

//middleware
// app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//import routes
import authRoute from "./routes/authRoute.js";

//setup middleware to use routes
app.use("/api/v1/auth", authRoute);

//define a route handler for the root URL
app.all("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Express server!" });
});

app.get("/", async (req, res) => {
  try {
    const users = await getUsers()
    res.status(200).json(users)
  } catch (err) { 
    console.error("Root handler error: ", err)
    res.status(500).json({message: "server error"})
   }
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
