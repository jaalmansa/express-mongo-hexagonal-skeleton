import { MyModuleRepository } from "../../domain/my.repository";
import { MyModuleValue } from "../../domain/my.value";
import { default as MyModuleItemModel } from "../model/mymodule.schema";

export class MongoRepository implements MyModuleRepository {
	async findItem(uuid: string): Promise<MyModuleValue | null> {
		const model = await MyModuleItemModel.findOne({ uuid });
		if (model) {
			return new MyModuleValue(model.uuid, model.name);
		}
		return null;
	}

	async createItem(newItem: MyModuleValue): Promise<MyModuleValue | null> {
		const itemCreated = await MyModuleItemModel.create({
			uuid: newItem.uuid,
			name: newItem.name,
		});

		if (itemCreated) {
			return new MyModuleValue(itemCreated.uuid, itemCreated.name);
		}
		return null;
	}
}
