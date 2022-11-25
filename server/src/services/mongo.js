const mongoose = require("mongoose");

const MONGO_URL =
	process.env.MONGO_URL ||
	"mongodb+srv://chirag:ca123456@nasacluster.hgrntbn.mongodb.net/hackathon?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
	console.log("mongodb is ready");
});

mongoose.connection.on("error", (err) => {
	console.error(err);
});

async function mongoConnect(url = "") {
	await mongoose.connect(url || MONGO_URL);
}

async function mongoDisconnect() {
	await mongoose.disconnect();
}

module.exports = {
	mongoConnect,
	mongoDisconnect,
	MONGO_URL,
};
