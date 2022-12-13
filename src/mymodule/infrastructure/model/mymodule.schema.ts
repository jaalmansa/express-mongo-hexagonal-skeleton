import { model, Schema } from "mongoose";

interface IMyModuleItem {
	uuid: string;
	name: string;
}

const MyModuleItemSchema = new Schema<IMyModuleItem>({
	uuid: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
});

const MyModuleItemModel = model<IMyModuleItem>("items", MyModuleItemSchema);

export default MyModuleItemModel;
