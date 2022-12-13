import { Request, Response } from "express";

import { MyModuleUseCase } from "../../application/mymodule.usecase";
import { MyModuleValue } from "../../domain/my.value";
import { MongoRepository } from "../repository/mongo.repository";

const findItem = async (req: Request, res: Response) => {
	const service = new MyModuleUseCase(new MongoRepository());

	const { id } = req.params;

	const result: MyModuleValue | null = await service.getItemByUuid(id);

	if (result) {
		res.status(200).json(result);
	} else {
		res.status(404).json({ msg: "item not found" });
	}
};

const createItem = async (req: Request, res: Response) => {
	const service = new MyModuleUseCase(new MongoRepository());

	const { name } = req.body;

	try {
		const result: MyModuleValue | null = await service.createItem(name);

		if (result) {
			res.status(201).json({
				msg: "item created",
				item: result,
			});
		} else {
			res.status(400).json({ msg: "error creating item" });
		}
	} catch (err) {
		res.status(500).json(err);
	}
};

export { createItem, findItem };
