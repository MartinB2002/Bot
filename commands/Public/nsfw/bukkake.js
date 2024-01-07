const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1183469121174769694/bukake3.gif?ex=65887282&is=6575fd82&hm=f66fea00b927833d422490c0e69888ce9408e4111c8fd28fe98a87014a1cbbe9&=&width=747&height=630",
  "https://media.discordapp.net/attachments/1083513611118465049/1183469122542108852/bukake_2.gif?ex=65887282&is=6575fd82&hm=077b0ef3ad6ce3324e56e66f05c830d56b610e946601a8e0b399cd34ad96ae6d&=&width=758&height=630",
  "https://media.discordapp.net/attachments/1083513611118465049/1183469124567961701/d09c3c392a703aa2d535b22d38151a02.gif?ex=65887283&is=6575fd83&hm=7e1b36665f1b444a9307e80e5c154c34a80bb485459373c061a08698acede1f6&=",
  "https://cdn.discordapp.com/attachments/1083513611118465049/1183469123955609761/Bukake_1.gif?ex=65887282&is=6575fd82&hm=af2a220d579a56a94e50d59903127b84277e4e40c4678fe4da89214b8ccd5fba&",
  "https://cdn.discordapp.com/attachments/1083513611118465049/1183469125499093062/Video-sin-titulo--Hecho-con-Clipchamp.gif?ex=65887283&is=6575fd83&hm=7332f9afd74ade0b52729a83f44924d84aa7b1ec54b2d66184d64960694fd210&"

];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("bukkake")
    .setDescription("¡en donde nos venimos!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién le tocar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} y demas se vienen en ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};
