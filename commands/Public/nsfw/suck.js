const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1102971352929022072/1307341_squeezabledraws_zelda-blowjob-animation.gif?width=1056&height=634`,
  `https://media.discordapp.net/attachments/1083513611118465049/1102971352564109342/4roszt1jdko51.gif?width=892&height=630`,
  "https://media.discordapp.net/attachments/1083513611118465049/1102971353369428058/hot-babe-sucking-his-bwc-and-stroking-him-down-to-bluemaize_001.gif?width=844&height=475",
  "https://media.discordapp.net/attachments/1083513611118465049/1102971353801429002/mona-blowjob_001.gif?width=880&height=635",
  "https://media.discordapp.net/attachments/1083513611118465049/1102971354246033478/zus9idof62o81.gif?width=1247&height=700"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("suck")
    .setDescription("¡Dale una mamada a un usuario!")
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

    return interaction.reply({ content: `${member} se la esta chupando a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};