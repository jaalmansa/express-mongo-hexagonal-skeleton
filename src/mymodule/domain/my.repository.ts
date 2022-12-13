import { MyModuleValue } from "./my.value";

export interface MyModuleRepository {
	/**
	 * Find item by uuid
	 * @param uuid
	 * @returns Promise with item found or null
	 */
	findItem(uuid: string): Promise<MyModuleValue | null>;

	/**
	 * Create new item
	 * @param user item
	 * @returns Promise with item created or null on error case
	 */
	createItem(user: MyModuleValue): Promise<MyModuleValue | null>;
}
