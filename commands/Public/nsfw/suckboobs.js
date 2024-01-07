const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1128699288613036124/suckboob.gif?width=530&height=700`,
  `https://media.discordapp.net/attachments/1083513611118465049/1128699288994725988/suckboob1.gif?width=550&height=366`,
  "https://media.discordapp.net/attachments/1083513611118465049/1128699289334452294/suckboob2.gif?width=495&height=279",
  "https://media.discordapp.net/attachments/1083513611118465049/1128699289678389388/suckboob3.gif?width=452&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1128699290047496242/suckboob4.gif?width=704&height=528"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("suck_boobs")
    .setDescription("¡Chupa algunos pechos!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿De quien son los pechos que chupas?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} esta chupamdo los pechos de ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
      ]
    });
  }
};