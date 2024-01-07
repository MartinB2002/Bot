const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1125813161795272724/handjop3.gif?width=660&height=371`,
  `https://media.discordapp.net/attachments/1083513611118465049/1125813162327937114/handjop4.gif?width=496&height=700`,
  "https://media.discordapp.net/attachments/1083513611118465049/1125813162701225984/handjop.gif?width=1245&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1125813163183587328/handjop1.gif?width=489&height=611",
  "https://media.discordapp.net/attachments/1083513611118465049/1125814828548767764/ezgif.com-video-to-gif.gif?width=436&height=700"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("hand-job")
    .setDescription("¡Porque no ayudas a alguien!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres ayudar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} le esta dando una mano a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};