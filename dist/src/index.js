import express from "express";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";
import './authStrategies/localStrategy.js';
import { corsOptions } from "./config.js";
//routes
import { campaignRoutes } from "./routes/campaign.js";
import authRouter from "./routes/auth.js";
import { router as userRouter } from "./routes/user.js";
dotenv.config();
const app = express();
app.use(cors(corsOptions));
// gitHubStrategy
app.use(session({
    secret: "hemligt",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
// ROUTES
app.use(express.json());
app.use("/campaign", campaignRoutes);
app.use("/users", userRouter);
app.use("/auth", authRouter);
if (process.env.VERCEL !== "1") {
    const PORT = process.env.PORT || 1337;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
export default app;
