const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1183396569484103680/c1aaaa336f273145eacfd68df6db7b15.gif?ex=65882ef0&is=6575b9f0&hm=3f05e774b822eae3d7ccd28bdb1a09f70ed189c6990936e6b39b19f922333f53&=&width=395&height=701`,
  `https://media.discordapp.net/attachments/1083513611118465049/1183396570100682862/3436445_-_animated_Hyperdimension_Neptunia_Megadimension_Neptunia_VII_Neptune_Noire_vinegarjar.gif?ex=65882ef0&is=6575b9f0&hm=469613ce0397f80ed1c7bf9c366d57f81139b753b98db3633e680be9c12c300a&=&width=1001&height=701`,
  "https://media.discordapp.net/attachments/1083513611118465049/1183396570524287007/c3ae221d85dd954f73f23777bffb4673.gif?ex=65882ef0&is=6575b9f0&hm=a528b74be05f1f1f1c80dea32a43ed38a250789703532bf628ad373b19b706c0&=&width=578&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1183396570973081671/fa5152ec061915c332d3701be5b60f19.gif?ex=65882ef0&is=6575b9f0&hm=aca9bb1399d9dafeeb4140cbfc003ed3e418c5e0c446ba9c3bacf81e4b62a424&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183396571765821460/ezgif.com-gif-maker_4.gif?ex=65882ef1&is=6575b9f1&hm=3e963883926794e7817f030cd60ae5e276fb22e4ce37beb91b281b1cf76a0bfe&="
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("fingers")
    .setDescription("¡Usa esos deditos tuyos!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿Con quien los vas a usar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} esta usando sus dedos con ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
      ]
    });
  }
};