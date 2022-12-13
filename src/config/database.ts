import mongoose from "mongoose";

const dbConnection = async () => {
	const uri: string = process.env.MONGODB_CNN || "";
	mongoose
		.connect(uri)
		.then(() => {
			console.log("Mongo connected");
		})
		.catch((err) => {
			console.log(err);
			throw new Error("Cannot start mongo connection");
		});
};

export default dbConnection;
