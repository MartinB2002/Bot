const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1094782008904929340/c6_1E6QDQ4S1ILu7ymHcrP3PKG1UZAYdqV7ejHL43tE.gif`,
  `https://media.discordapp.net/attachments/1083513611118465049/1142954658684485652/460991bcf336a08d8d4fa3b2d3d3dfe0.gif?width=1243&height=700`,
  "https://media.discordapp.net/attachments/1083513611118465049/1094784398165024808/cespmw1259u71.gif?width=1135&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1142954658323763240/0ce9ac47afa5480ab87484367e695e0a.gif",
  "https://media.discordapp.net/attachments/1083513611118465049/1094784398899040256/ibwnmuwt09n81.gif"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("fuck")
    .setDescription("¡Porque no se la metemos a alguien!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién te quieres Coger?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} se esta cogiendo a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};