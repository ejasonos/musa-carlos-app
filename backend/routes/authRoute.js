import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

const router = Router();

router.get("/login", (req, res) => {
  res.send("Login Route");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    
    console.log(user._id,user.name,user.email,token)

    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/register", (req, res) => {
  res.send("Register Route");
});


router.post("/register", async (req, res) => {
  try {
    const { name, username, email, faculty, department, password } = req.body;

    // Input validation
    if (!name || !username || !email || !faculty || !department || !password) {
      return res.status(400).json({
        message:
          "All fields are required: name, username, email, faculty, department, password",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already in use" });
      }
      // if (existingUser.username === username) {
      //   return res.status(400).json({ message: "Username already in use" });
      // }
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Username and password validation for special characters
    // const usernameRegex = /^[a-zA-Z0-9_]+$/;
    // const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    // if (!usernameRegex.test(username)) {
    //   return res.status(400).json({
    //     message: "Username can only contain letters, numbers, and underscores",
    //   });
    // }

    // if (!passwordRegex.test(password)) {
    //   return res.status(400).json({
    //     message:
    //       "Password must be at least 6 characters and contain at least one special character",
    //   });
    // }

    const newUser = new User({
      name: name,
      username: username,
      email: email,
      faculty: faculty,
      department: department,
      password: hashedPassword,
    });

    console.log(newUser)

    await newUser.save();

    // Generate a token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });


    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
        faculty: newUser.faculty,
        department: newUser.department,
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

export default router


/********** The code that worked ********s
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    })



    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.all("/register", async (req, res) => {
  try {
    const { name, faculty, department, email, password } = req.body;

    // Input validation
    if (!name || !email || !faculty || !department || !password) {
      return res.status(400).json({
        message:
          "All fields are required: name, email, faculty, department, password",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already in use" });
      }
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Username and password validation for special characters
    // const nameRegex = /^[a-zA-Z0-9_]+$/;
    // const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    // if (!nameRegex.test(name)) {
    //   return res.status(400).json({
    //     message: "Username can only contain letters, numbers, and underscores",
    //   });
    // }

    // if (!passwordRegex.test(password)) {
    //   return res.status(400).json({
    //     message:
    //       "Password must be at least 6 characters and contain at least one special character",
    //   });
    // }

    const newUser = new User({
      name,
      faculty,
      department,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    console.log(newUser)

    // Generate a token
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT_SECRET not set in .env" });
    }
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        faculty: newUser.faculty,
        department: newUser.department,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

// const getUsers = async () => {
//   return await User.find({})
// }
// app.get('/', async (req, res) => {
//   const users = getUsers()
//   res.json(users)
// })

export default router;

*********/
