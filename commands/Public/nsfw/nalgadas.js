const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1116834150712868904/6B0.gif?width=1245&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1116834151086166026/slap5.gif?width=660&height=371",
  "https://media.discordapp.net/attachments/1083513611118465049/1116834151585284137/slpa3.gif?width=458&height=660",
  "https://media.discordapp.net/attachments/1083513611118465049/1127644140348375061/e7c3596ccfec3a18411bc6e8c73f899b.gif?width=660&height=371",
  "https://media.discordapp.net/attachments/1083513611118465049/1116834152625471528/spal4.gif?width=664&height=521"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("nalguear")
    .setDescription("¡Dale una buena nalgada a un usuario!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres nalguear?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} Le pego una nalgeada a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};