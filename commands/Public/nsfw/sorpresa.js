const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1116834614128955512/sorpresa1.gif?width=660&height=660",
  "https://media.discordapp.net/attachments/1083513611118465049/1116834614531596351/sorpresa2.gif?width=939&height=528",
  "https://media.discordapp.net/attachments/1083513611118465049/1127617495851872276/sorpresa7.gif?width=616&height=462",
  "https://media.discordapp.net/attachments/1083513611118465049/1127637827316891778/ezgif.com-video-to-gif_6.gif?width=520&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1116834616003797113/sorpresa5.gif?width=393&height=699"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("sorpresa")
    .setDescription("¡Dale una buena sorpresa a un usuario!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres sorprender?")
        .setRequired(false)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} a sorprendido a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};