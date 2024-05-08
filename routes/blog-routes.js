import express from "express";

import logMiddleware from "../middlewares/log-middleware.js";
import { getBlogs, createBlog, getBlogById, updateBlog, deleteBlog } from "../controllers/blog-controller.js";

const router = express.Router();

router.get("/", getBlogs);

router.post("/", logMiddleware, createBlog);

router.get("/:id", logMiddleware, getBlogById);

router.put("/:id", logMiddleware, updateBlog);

router.delete("/:id", logMiddleware, deleteBlog);

export default router;