const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1112400127013949450/6h28oc1ajk251.gif?width=475&height=528`,
  `https://media.discordapp.net/attachments/1083513611118465049/1112400127508893847/7390wq0dwk151.gif?width=1056&height=594`,
  "https://media.discordapp.net/attachments/1083513611118465049/1112400127936708759/ezgif.com-video-to-gif_2.gif?width=660&height=371",
  "https://media.discordapp.net/attachments/1083513611118465049/1112400128389681282/hentai-yuri-gifs-3.gif?width=927&height=481",
  "https://media.discordapp.net/attachments/1083513611118465049/1112400128880427008/YfsX5xtFDwgOyYe8nFFN8NBe1hiUOMVnFxITfRlFNvk.gif?width=902&height=506"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("yuri_fuck")
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