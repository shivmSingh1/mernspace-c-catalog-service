import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middlewares/globalErrorHandler";
import categoryRouter from "./category/category-router";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("catelog service");
});

app.use(cookieParser())
app.use(express.json())
app.use(globalErrorHandler);

app.use("/categories", categoryRouter);

export default app;
