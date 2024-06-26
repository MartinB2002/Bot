const { execute } = require("../../ComandosPrefixs/kiss");

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message, client){
        const prefix = `.`;

        if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const cmd = client.prefixs.get(command) || client.prefixs.find((cmd) => command.aliases && cmd.asliases.includes(command));

  if (!cmd) return;

  cmd.execute(message, args);
    },
};