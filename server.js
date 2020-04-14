const Hapi = require("@hapi/hapi");
//const dotenv = require("dotenv").config();
const sendSMSes = require("./sendSMS");
const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });
  server.route({
    method: "POST",
    path: "/critical/api",
    handler: (request, h) => {
      console.log(typeof request.payload);
      const payloadJson = JSON.parse(request.payload);
      const to = payloadJson.to.split(",");
      sendSMSes(to, payloadJson.body);
      return "OK";
    },
  });
  server.route({
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Welcome to msgco API.";
    },
  });
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
