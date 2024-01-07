const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1116818375142813756/cumin3.gif?width=497&height=700`,
  `https://media.discordapp.net/attachments/1083513611118465049/1116818375830671444/cumin5.gif?width=880&height=685`,
  "https://media.discordapp.net/attachments/1083513611118465049/1116818376275275776/Po2vnvb.gif?width=759&height=426",
  "https://media.discordapp.net/attachments/1083513611118465049/1116818376849899560/cumin1.gif?width=704&height=528",
  "https://media.discordapp.net/attachments/1083513611118465049/1116836046773170343/1a664a6dd628731246a516176324bd57.gif?width=880&height=495"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("cum-in")
    .setDescription("¡Que pasa ya te viniste!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién le quieres llenar de leche?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} se vino dentro de ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
      ]
    });
  }
};