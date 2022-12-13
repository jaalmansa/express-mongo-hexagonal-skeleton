import { MyModuleEntity } from "./my.entity";

export class MyModuleValue implements MyModuleEntity {
	uuid: string;
	name: string;

	constructor(uuid: string, name: string) {
		this.uuid = uuid;
		this.name = name;
	}
}
