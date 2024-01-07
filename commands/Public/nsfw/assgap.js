const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1111914440208687145/ezgif.com-video-to-gif.gif?width=660&height=370",
  "https://media.discordapp.net/attachments/1083513611118465049/1111914439747326062/ezgif.com-video-to-gif_1.gif?width=660&height=371",
  "https://media.discordapp.net/attachments/1083513611118465049/1111914440623935571/ro0nf08n4tl71.gif?width=530&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1111914439336271973/b55ed7487bda86a4a40094fff9507b00.gif?width=594&height=330",
  "https://media.discordapp.net/attachments/1083513611118465049/1111914438925234246/a12f24097364af065921c3f5d2d64a96.gif?width=880&height=660"

];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("ass-gap")
    .setDescription("¡Toquemos algo muy suave!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién se lo vamos a tocar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} le esta tocando el culo a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};
