const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1183174995095064646/2.gif?ex=65876095&is=6574eb95&hm=184c4aca74fd731582e216d30169fc66875b0124ce784a2c7f9209f034a6e4ee&=`,
  `https://media.discordapp.net/attachments/1083513611118465049/1183174995476742174/Dibujos_De_Chicas.gif?ex=65876095&is=6574eb95&hm=f4f009925d90055c397974ceda7155bd407d308b4039d7a932bc7715557ebf49&=`,
  "https://media.discordapp.net/attachments/1083513611118465049/1183174995845853285/68747470733a2f2f696d6775722d617263686976652e7070792e73682f62516e44734c6a2e676966.gif?ex=65876095&is=6574eb95&hm=811a2f33f7134cfd2f251258a659e3140a0e35cef6788ac6ac02e7c77bbfca16&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1184330639118442546/tenor.gif?ex=658b94dc&is=65791fdc&hm=7d7ec8728d43c1344828e0f0bf6ba73e9f7890ebe8ea86ad69e90545d5fe0210&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183174996567261224/A_World_That_Does_Not_Exist___Photo.gif?ex=65876095&is=6574eb95&hm=5366d37b2d24ed74fa4cfb2972f87c7f063a2eed0abd9182f01016d4d48fa7b9&="
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("pats")
    .setDescription("¡Acaricia a alguien!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién vas a acariciar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} le esta dando unas caricias a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};