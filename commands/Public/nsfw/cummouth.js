const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1117449097805320331/4264563f90744d1b7629513c0219e09d.gif?width=569&height=569`,
  `https://media.discordapp.net/attachments/1083513611118465049/1117449098329600133/cumboca1.gif?width=550&height=308`,
  "https://media.discordapp.net/attachments/1083513611118465049/1117449098744840252/cumboca2.gif?width=880&height=495",
  "https://media.discordapp.net/attachments/1083513611118465049/1117449099160080525/cumboca3.gif?width=926&height=654",
  "https://media.discordapp.net/attachments/1083513611118465049/1117449099575308380/ezgif.com-video-to-gif.gif?width=660&height=371"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("cum-mouth")
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

    return interaction.reply({ content: `${member} se vino en la boca de ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
      ]
    });
  }
};