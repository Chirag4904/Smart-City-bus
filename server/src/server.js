const http = require("http");
const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { loadRoutesData } = require("./models/routes.model");
// const { loadsubjectsData } = require("./models/subjects.model");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect(process.env.MONGODB_URL || "");

  await loadRoutesData();
  // await loadsubjectsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
