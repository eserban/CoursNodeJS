import express from "express";
import routes from "./routes.mjs";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import docs from "./docs/index.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

/**
 * Middlewares
 */
app.use(express.json({ extended: false }));
app.use(morgan("dev"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

/**
 * Route initialization
 */
app.use("/", routes);

/**
 * POrt definition
 */
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
