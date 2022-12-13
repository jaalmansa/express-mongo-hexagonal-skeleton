import { Router } from "express";
import { check } from "express-validator";

import { createItem, findItem } from "../controller/mymodule.controller";
import onValidationError from "../middleware/request-validator";

const router = Router();

router.get(
	"/:id",
	[check("id", "ID is mandatory").notEmpty(), onValidationError],
	findItem
);

router.post("/create", createItem);

export default router;
