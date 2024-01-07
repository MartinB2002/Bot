const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1127614496236646470/anal.gif?width=1246&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614496677036142/anal1.gif?width=792&height=445",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614497251664063/anal2.gif?width=660&height=371",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614497666904166/anal3.gif?width=499&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614497989853204/anal4.gif?width=1050&height=700"

];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("anal")
    .setDescription("¡vallamos por detras!")
    .addUserOption(option =>
      option.setName("usuario") 
        .setDescription("¿A quién se lo vas a meter?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} se lo esta haciendo por detras a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};