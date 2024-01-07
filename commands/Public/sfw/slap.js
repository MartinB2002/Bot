const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1116073969922101309/30d5d250fb8bd5a84cec50a40c9d9f3afa59da2e_hq.gif?width=550&height=309",
  "https://media.discordapp.net/attachments/1083513611118465049/1116073970379272242/77c49464c6bd547f01779970cc8a77b380664f1br1-320-320_hq.gif?width=352&height=352",
  "https://media.discordapp.net/attachments/1083513611118465049/1116073970849022033/647c240c6d824f4e7e9b0826f6c6abaf03659ee2_hq.gif?width=495&height=278",
  "https://media.discordapp.net/attachments/1083513611118465049/1116073971335581728/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4756464c4f327a72776f597453513d3d2d3330303431343237392e31343663346233313363393236.gif?width=528&height=297",
  "https://media.discordapp.net/attachments/1083513611118465049/1116073971864055928/ezgif.com-video-to-gif.gif?width=528&height=297"
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("slap")
    .setDescription("¡Dale una bofetada a un usuario!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres abofetear?")
        .setRequired(false)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} Le pego una cachetada a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};