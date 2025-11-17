import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

let startServer = async () => {
  try {
    await connectDB();

    let port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
