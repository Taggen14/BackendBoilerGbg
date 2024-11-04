import dotenv from "dotenv";
dotenv.config();
// cors settings  
const allowedOrigins = process.env.NODE_ENV === "production"
    ? ["https://main.d2zbjg7v8bstm4.amplifyapp.com"]
    : ["http://localhost:5173"];
export const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
