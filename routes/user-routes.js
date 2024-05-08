import express from "express";

import logMiddleware from "../middlewares/log-middleware.js";
import { updateUser, deleteUser } from "../controllers/user-controller.js";

const router = express.Router();

router.put("/:id", logMiddleware, updateUser);

router.delete("/:id", logMiddleware, deleteUser);

export default router;