const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const slaps = [
  `https://media.discordapp.net/attachments/1083513611118465049/1183164866123530290/kuzu-no-honkai-kiss.gif?ex=65875726&is=6574e226&hm=e6969d333f46080a6260492bb1c93bb99a279905bafa373e6d746a938b108e15&=`,
  `https://media.discordapp.net/attachments/1083513611118465049/1183164866484252672/M_zDzwCH.gif?ex=65875726&is=6574e226&hm=e2acc2e63f1a1c15b7f20ed779b5f65959e330e9da77d9f2d79852810b7c9d63&=`,
  "https://media.discordapp.net/attachments/1083513611118465049/1183164866941440131/QpQCXyh1.gif?ex=65875726&is=6574e226&hm=d292e38bcd27eac872a31fc07c7f5f03cb341c178aaa3b41589e1b972d300765&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183164867297935462/JKRSP4Xn.gif?ex=65875726&is=6574e226&hm=351f7aab0d24eec7f5495b9b19ba067f3f24752b98396c60265bc5baba5b3342&=",
  "https://media.discordapp.net/attachments/1083513611118465049/1183164867641880646/85588b47efd5afa15232766fd1b8315e.gif?ex=65875726&is=6574e226&hm=525bc9c7a54923223e1f0f11cb46b3e35320c1cc6fda59cd91e52ee0d7459c66&="
];

// Variable global para almacenar el recuento de usos del comando por usuario
const commandCount = {};


module.exports = {
  premiumOnly: false,
  data: new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("¡dale un beso a alguien!")
    .addUserOption(option =>
      option.setName("usuario")
        .setDescription("¿A quién quieres besar?")
        .setRequired(true)
    ),
  async execute(interaction) {
    const { options, member } = interaction;

    const user = options.getUser("usuario");

    // Obtener el ID del usuario que ejecuta el comando
    const userId = member.user.id;

    // Incrementar el recuento de usos del comando para el usuario actual
    commandCount[userId] = (commandCount[userId] || 0) + 1;

    return interaction.reply({ content: `${member} le dio un beso a ${user}!`, 
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setImage(slaps[Math.floor(Math.random() * slaps.length)])
          
      ]
    });
  }
};