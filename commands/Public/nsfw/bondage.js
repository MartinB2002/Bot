const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  "https://media.discordapp.net/attachments/1083513611118465049/1183524776057241630/r34-gif-r34--bondage-3934377.gif?ex=6588a657&is=65763157&hm=2e3fd7bc5a5d04574520c2f16a58f2eac43ca7fc30935caef446229ccadc1c3a&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183524776464105553/23868571.gif?ex=6588a657&is=65763157&hm=98949d7c16020748c1207d0e7e4a352016d3e98b2f496e90908b49b916ec3c2e&=&width=496&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1183524776866746438/dds2h95-2467f385-f328-451b-bfe6-3242decb7676.gif?ex=6588a657&is=65763157&hm=f0f9d15906b587b9f4a696ae355989d30c36d5e9a966a02d0c79bcea35131097&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183524777378463804/aster-effect-712620-GIF_Sakuras_Bondage_2_2.gif?ex=6588a657&is=65763157&hm=646264dfaaf5ecccabb489c530125437812f085864be08f128f45a125eccff24&=&width=496&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1183524777877569615/fjda63mlpu441.gif?ex=6588a657&is=65763157&hm=b2f04aaf93181969c16d2dc1ac9aafbbc6fffb4824af4922a34c6c9b8a19693b&="

];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};

module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("bondage")
    .setDescription("¡Vamos a atrapar a alguien!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quien quieres atrapar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} inmovilizo a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};
