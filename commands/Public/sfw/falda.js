const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1128831217618395226/tumblr_pcwl3dqZ8E1rdxvexo1_500.gif?width=550&height=550",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614552494837851/falda2.gif?width=598&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614552943636572/falda4.gif?width=409&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614553388220496/falda5.gif?width=660&height=370",
  "https://media.discordapp.net/attachments/1083513611118465049/1127614553748934687/flade3.gif?width=550&height=309"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("falda")
    .setDescription("¡que lida falda tienes!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿Quieres que algien te vea?")
        .setRequired(false)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} esta mostrando su linda falda. ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};