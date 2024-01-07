const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1183264572078030921/f75e8b30415e27f2f8c03f2d51deb343.gif?ex=6587b401&is=65753f01&hm=56056950e4c337890e03af8978112db823e300d9d0cbabc5a833e85c4d90c5d6&=`,
  `https://media.discordapp.net/attachments/1083513611118465049/1183264572535214160/faa6435d8fdd5e9a7c97e0d1edab312d.gif?ex=6587b402&is=65753f02&hm=4d8c8366171b846437708b3d085f12fc1683443e20321bf1df13b31f42153afc&=`,
  "https://media.discordapp.net/attachments/1083513611118465049/1183264573101461574/74qo5jh176o71.gif?ex=6587b402&is=65753f02&hm=fddc3bee4b575f77cd05cecaf94ca5b3174e0698869ace317d24665b540760bc&=&width=500&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1183264573877387375/donedone-Porn-Art-gif-Porn-Art--6781554.gif?ex=6587b402&is=65753f02&hm=3e346132dc353c5a383b67065b61bdcfe1ca0486412b5da660d7594262553765&=&width=467&height=701",
  "https://media.discordapp.net/attachments/1083513611118465049/1183264574313599046/6697e182b87304737dcd393d8c5d176a.gif?ex=6587b402&is=65753f02&hm=3902c2aa1f7e803a1da42aade18f81943ea865b257609bb681c4d47f5338b495&="
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("dansing")
    .setDescription("¡No quieres bailar un poco!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quien le quieres dedicar el baile?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} le esta dando un baile a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
      ]
    });
  }
};