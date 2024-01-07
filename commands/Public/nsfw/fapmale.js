const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1112396731775193149/059e7684262ef6f82a9542fc284d8c45800fa51c.gif?width=572&height=660`,
  `https://media.discordapp.net/attachments/1083513611118465049/1112396732186230845/ezgif.com-video-to-gif_1.gif?width=660&height=371`,
  "https://media.discordapp.net/attachments/1083513611118465049/1112396732580507699/ezgif.com-video-to-gif.gif?width=660&height=594",
  "https://media.discordapp.net/attachments/1083513611118465049/1112396732991541349/mazaki_anzu_yu_gi_oh_and_2_more_drawn_by_waero__4302e93f4f6ebe07a4beec5984f88c00.gif?width=528&height=660",
  "https://media.discordapp.net/attachments/1083513611118465049/1183541526622646322/c1b83b6282b8e4c02c5480dde7a23df04bff76be.gif?ex=6588b5f1&is=657640f1&hm=bf4248c1d6402161041ab60e3ae1d14818c8dfaf94ca37c3fa9551885f9efc03&=&width=756&height=701"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("fap-male")
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