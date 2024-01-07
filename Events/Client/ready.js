const { loadCommands } = require("../../Handlers/commandHandler")
const { loadPrefixs } = require("../../Handlers/prefixHandler")

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
      console.log("El cliente ya esta listo");

      loadCommands(client);
      loadPrefixs(client);
    },
  };
  