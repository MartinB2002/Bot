
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1095341366680236122/rumsy9o03roa1.gif`,
  `https://media.discordapp.net/attachments/1083513611118465049/1095341367040933988/javha5smy5b61.gif`,
  "https://media.discordapp.net/attachments/1083513611118465049/1095341367426830457/DASH_1080.gif",
  "https://media.discordapp.net/attachments/1083513611118465049/1095341367837864026/DASH_480.gif",
  "https://media.discordapp.net/attachments/1083513611118465049/1095341368236310618/igj0ymh3r0ba1.gif"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("fap-girl")
    .setDescription("¡Date un poco de placer!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿Quieres que alguien te vea?")
        .setRequired(false)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} se esta masturbando. ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};