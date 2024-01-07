const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1183167914564669460/c867f6e32eb7bc81760015dfc08f4d05.gif?ex=658759fd&is=6574e4fd&hm=10dd91a5c2fe265dc3e71e7b3a1e8d424cd5d80ae617828be57c5b52797b4a71&=`,
  `https://media.discordapp.net/attachments/1083513611118465049/1183167914958917673/BM7k.gif?ex=658759fd&is=6574e4fd&hm=ffc8aeffcd48af8bf3a0672a3a5c4f9696d7e93e7fd0098756850fa1df6413e4&=`,
  "https://media.discordapp.net/attachments/1083513611118465049/1183167915395141803/ezgif.com-video-to-gif_2.gif?ex=658759fd&is=6574e4fd&hm=6237f3c1b37e3dbbb713f159afbcc83f39518e3460aa87d37692492cecba6170&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183170526647165029/ezgif.com-gif-maker.gif?ex=65875c6b&is=6574e76b&hm=f0e97fe8e5c37802ac018fff3d1385b47c1577918a4e88952bce88f205a1db17&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183170527121133759/3434.gif?ex=65875c6b&is=6574e76b&hm=22767fa2fef04c564b0b5b644ef15a1e51bdcd515171e6fb79d0aa8c2fd4278c&="
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("¡dale un abrazo a alguien!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres abrazar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} le dio un abrazo a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};