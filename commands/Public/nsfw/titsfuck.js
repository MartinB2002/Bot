const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1183255780481318942/a1b18f72cb2c3710e58e631c51c67394.gif?ex=6587abd1&is=657536d1&hm=de11a6551f1c622de90a95711bd2b581bb3a8442ee754225225b333373dbebb7&=`,
  `https://media.discordapp.net/attachments/1083513611118465049/1183255781198528594/3044738_-_abcdman123_animated_edit_Ino_Yamanaka_Mushiro_Naruto.gif?ex=6587abd2&is=657536d2&hm=a0f1c965e73feb46b7cebac43c534dc62950e53495f82ac13633cc0ab6bb4c76&=&width=526&height=701`,
  "https://media.discordapp.net/attachments/1083513611118465049/1183255781651517450/069f0b9b016983f36c2041d89696eedf.gif?ex=6587abd2&is=657536d2&hm=835321a44f3d042e13d0f4a42f808cdc50e8119effe0e5b9b98d544b94478d75&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183255782041600131/ezgif.com-video-to-gif.gif?ex=6587abd2&is=657536d2&hm=df2602dbb434fa91ee6612fcfa995bacc66e6296d6d590426649295908fe0aca&=&width=590&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1183255783270514871/wewe.gif?ex=6587abd2&is=657536d2&hm=7d58e65dcefe4c0c7ae2ef7e5db6fc507b208fa4ab989ce8d935c8eef2d4fed4&="
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("tits_fuck")
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

    return interaction.reply({ content: `${member} se esta cogiendo las tetas de ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};