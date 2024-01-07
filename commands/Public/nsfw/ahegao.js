const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1150424204026585208/263_1000.gif?ex=65916e08&is=657ef908&hm=fb7f5dd12535bce17735deb8168b3cd22d2fe4c87d3772109ab2eefd22579087&=`,
  `https://media.discordapp.net/attachments/1083513611118465049/1150424204529897684/1411e3b2b8c4ca08ab4aa8601beba369.gif?ex=65916e08&is=657ef908&hm=ff5a88d1492be53ad46daa9357fd6c117b06c242cf15a043a53ef674003c6bff&=`,
  "https://media.discordapp.net/attachments/1083513611118465049/1150424204995473458/68721bfdbe8925cc2ea6554162dc5ff9.gif?ex=65916e08&is=657ef908&hm=7a52db770a7a52453062e6f8bfb30e2a028ff7957b71d172c9e2e2d0dccb9be2&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1150424205456838776/c797f584366ec2200881eab8f3d3df3a.gif?ex=65916e08&is=657ef908&hm=5f8fc81aeda3ba868fb7b117129bde6ca1103e2fc976d37d2f50d5b5379bc5ce&=&width=1246&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1187864695114309642/c5c6a133ca5ffcd277a726fe5ecb9864.gif?ex=65987034&is=6585fb34&hm=ff147f489c83be8779ca44c2d099d5e8ac06f43fdbdc7258181dbccfbce764fb&="
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("ahegao")
    .setDescription("¡Quieres demostrar placer!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres mencionar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} se a excitado tanto que no puede controlarse por culpa de ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};