import { v4 as uuidv4 } from "uuid";

import { MyModuleRepository } from "../domain/my.repository";
import { MyModuleValue } from "../domain/my.value";

export class MyModuleUseCase {
	constructor(private readonly repository: MyModuleRepository) {}

	/**
	 * Get item by id use case
	 * @param uuid
	 * @returns
	 */
	public getItemByUuid(uuid: string): Promise<MyModuleValue | null> {
		return this.repository.findItem(uuid);
	}

	/**
	 * Create new item use case
	 * @param name name of item
	 * @returns created item
	 */
	public createItem(name: string): Promise<MyModuleValue | null> {
		const uuid = uuidv4();

		return this.repository.createItem(new MyModuleValue(uuid, name));
	}
}
