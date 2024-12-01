const Hapi = require("@hapi/hapi");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const cholestrolHistoryRoutes = require("./routes/cholestrolHistoryRoutes");

dotenv.config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  const allRoutes = [...userRoutes, ...cholestrolHistoryRoutes];

  server.route(allRoutes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
