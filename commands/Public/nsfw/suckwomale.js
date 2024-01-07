const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1112408487268466708/a5fb213b9662482200cd34a8ff45d791.gif?width=880&height=495`,
  `https://media.discordapp.net/attachments/1083513611118465049/1112408487700484116/E42.gif?width=1439&height=576`,
  "https://media.discordapp.net/attachments/1083513611118465049/1112408488094744687/5e653f34f2273388feeac7f84cd89fe5.gif?width=826&height=599",
  "https://media.discordapp.net/attachments/1083513611118465049/1112408488459636927/24c2da282e46901b99ab911c7111317c.gif?width=880&height=495",
  "https://media.discordapp.net/attachments/1083513611118465049/1112408488837140533/82dd2c581b9b02f5a1c0372054ff2ce721523e75.gif?width=792&height=446"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("suck_woman")
    .setDescription("¡Dale una lamida a un usuario!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres satisfacer?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} se la esta comiendo a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
      ]
    });
  }
};