import db from "../db";

export const getTransactions = async (userId:number|string) => {
	try{
		if(Number(userId) <= 0){
			throw new Error("Id must be greater than zero");
		}
		const transactions = db.query(``).values()
	}catch(err){
		throw new Error("Fatal error.");
	}
};