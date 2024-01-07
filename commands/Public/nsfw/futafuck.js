const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1127642481194958918/futafuck1.gif?width=600&height=700`,
  `https://media.discordapp.net/attachments/1083513611118465049/1127642481606004867/futafuck2.gif?width=442&height=700`,
  "https://media.discordapp.net/attachments/1083513611118465049/1127642482042208308/futafuck3.gif?width=938&height=528",
  "https://media.discordapp.net/attachments/1083513611118465049/1127642482499391658/futafuck4.gif?width=520&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1127642482935595048/futafuck5.gif?width=495&height=700"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("futa_fuck")
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