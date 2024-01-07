const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1102976585193230507/1qfaE62.gif?width=761&height=426`,
  `https://media.discordapp.net/attachments/1083513611118465049/1102976585629454386/3dksjelvsooa1.gif?width=704&height=528`,
  "https://media.discordapp.net/attachments/1083513611118465049/1102976585981767720/6jhu52n2osoa1.gif?width=1245&height=700",
  "https://media.discordapp.net/attachments/1083513611118465049/1102976586434744330/hentai-gif-d-va-riding-her-toy-kilalesi.gif?width=530&height=611",
  "https://media.discordapp.net/attachments/1083513611118465049/1102976586824831006/klruqxi2chq21.gif?width=1001&height=700"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("women-toy")
    .setDescription("¡Juegemos un poco!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿quieres que alguien te vea?")
        .setRequired(false)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} esta usando unos jugete. ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};