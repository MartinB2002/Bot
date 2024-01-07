const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1183160741767938178/69_1.gif?ex=6587534e&is=6574de4e&hm=a1783eef00f9428e683c73dfda6679b4de6f683007223312723839dfea7157ed&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183160742292230284/69_3.gif?ex=6587534f&is=6574de4f&hm=c948e497351594ce690d65c55346ca9920584a45110094cfc9f2d9b83bf30858&=&width=1246&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1183160743584088254/69_5.gif?ex=6587534f&is=6574de4f&hm=7e58d4644c67d1976998c6d01c5d54013687f0e83c2f15098a37b6d3cbbad0e4&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183160744062226532/69_2.gif?ex=6587534f&is=6574de4f&hm=b5cf70bdb6a77f7b537b55c160c2a093ebc280f2795508ae45ad16192d5b6c40&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183164275380985958/ezgif.com-video-to-gif_1.gif?ex=65875699&is=6574e199&hm=5f120a190e233b2b5512803a3884f44e257525275b8c677d728f80085abe6b2f&="

];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("69")
    .setDescription("¡La postura 69!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿Con quien lo vas a hacer?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} esta haciendo el 69 con ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};