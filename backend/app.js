import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes.js";
import notFound from "./middlewares/notFound.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";

let app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Todo API is running ");
});

app.use("/api/v1/todos", todoRoutes);

app.use(notFound);

// error handler (last)
app.use(errorHandler);

export default app;
