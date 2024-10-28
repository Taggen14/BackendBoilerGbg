import express from "express";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";
import './authStrategies/localStrategy'
import { corsOptions } from "./config";

//routes
import { campaignRoutes } from "./routes/campaign";
import authRouter from "./routes/auth";
import { router as userRouter } from "./routes/user";

dotenv.config();

const app = express();

app.use(cors(corsOptions));
// gitHubStrategy
app.use(
  session({
    secret: "hemligt",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use(express.json());
app.use("/campaign", campaignRoutes);
app.use("/users", userRouter);
app.use("/auth", authRouter);

const SERVER_PORT = process.env.SERVER_PORT || 1337;

app.listen(SERVER_PORT, () => {
  console.log("Server started on: " + SERVER_PORT);
});

export default app;