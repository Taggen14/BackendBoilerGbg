import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// cors settings  
const allowedOrigins =
process.env.NODE_ENV === "production"
  ? ["add-your-frontend url-here"]
  : ["http://localhost:5173"];

export const corsOptions: cors.CorsOptions = {
origin: allowedOrigins,
credentials: true,
methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
allowedHeaders: ["Content-Type", "Authorization"],
};
  


