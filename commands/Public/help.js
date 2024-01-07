const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require(`discord.js`);
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("help")
      .setDescription("Mira mis comandos"),
  
    async execute(interaction) {

      const cmp = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
        .setCustomId("Menu")
        .addOptions([
          {
            label: "Menu Principal",
            description: "Menu Principal.",
            value: "uno",
            emoji: "⚙️",
          },
          {
            label: "Usuario",
            description: "Comandos de para el usuario",
            value: "dos",
            emoji: "🗣️",
          },
          {
            label: "NSFW",
            description: "Comandos de de reaccion nsfw",
            value: "tres",
            emoji: "⛔",
          },
          {
            label: "SFW",
            description: "Comandos de reaccion sfw",
            value: "cuatro",
            emoji: "❤️",
          },
        ])
      );
      const user = interaction.user;
  
      const embed = new EmbedBuilder()
        .setTitle("Menu de ayuda")
        .setImage("https://media.discordapp.net/attachments/1017460181824721006/1183481739390230698/6264257c3c5cf574e26e9a6660f8cab3.png?ex=65887e42&is=65760942&hm=9d7ff1df6a9f0140ef7533717d297ef135740f631e97f52f856a1459317ae326&=&format=webp&quality=lossless")
        .setColor("#a0becb")
        .setDescription(`**Seleccione que tipos de comando quiere ver**`);
  
      let mensaje = await interaction.reply({
        embeds: [embed],
        components: [cmp],
      });
  
      const ifiltro = i => i.user.id === interaction.user.id;
  
      let collector = interaction.channel.createMessageComponentCollector({ filter: ifiltro });
  
      const embed1 = new EmbedBuilder()
        .setTitle("Comandos Usuario")
        .setDescription("/anonimo" + "\n" + "Haz una confesión anonima" + "\n" + "/dados" + "\n" + "🎲 Tira los dados" + "\n" + "/hep" + "\n" + "Mira mis comandos" + "\n" + "/whois" + "\n" + "Da la informacion de un usuario del server.")
        .setFooter({ text: "Un texto" })
        .setTimestamp()
        .setColor("#2c2d31");
  
      const embed2 = new EmbedBuilder()
        .setTitle("Comandos NSFW")
        .setDescription("/69" + "\n" + "¡La postura 69!" + "\n" + "/ahegao" + "\n" + "¡Por qué no ayudas a alguien!" + "\n" + "/anal" + "\n" + "¡Vayamos por detrás!" + "\n" + "/ass-gap" + "\n" + "¡Toquemos algo muy suave!" + "\n" + "/bondage" + "\n" + "¡Vamos a atrapar a alguien!" + "\n" + "/bukkake" + "\n" + "¡En donde nos venimos!" + "\n" + "/cum-in" + "\n" + "¡Que pasa ya te viniste!" + "\n" + "/cum-mouth" + "\n" + "¡Que pasa ya te viniste!" + "\n" + "/dansing" + "\n" + "¡No quieres bailar un poco!" + "\n" + "/fap-girl" + "\n" + "¡Date un poco de placer!" + "\n" + "/fap-male" + "\n" + "¡Date un poco de placer!" + "\n" + "/fingers" + "\n" + "¡Usa esos deditos tuyos!" + "\n" + "/fuck" + "\n" + "¡Porque no se la metemos a alguien!" + "\n" + "/futa_fuck" + "\n" + "¡Porque no se la metemos a alguien!" + "\n" + "/hand-job" + "\n" + "¡Porque no ayudas a alguien!" + "\n" + "/nalguear" + "\n" + "¡Dale una buena nalgada a un usuario!" + "\n" + "/sorpresa" + "\n" + "¡Dale una buena sorpresa a un usuario!" + "\n" + "/suck" + "\n" + "¡Dale una mamada a un usuario!" + "\n" + "/suck_boobs" + "\n" + "¡Chupa algunos pechos!" + "\n" + "/suck_woman" + "\n" + "¡Dale una lamida a un usuario!" + "\n" + "/tits_fuck" + "\n" + "¡Porque no se la metemos a alguien!" + "\n" + "/women-toy" + "\n" + "¡Juguemos un poco!" + "\n" + "/yuri_fuck" + "\n" + "¡Porque no se la metemos a alguien!" )
        .setFooter({ text: "Un texto" })
        .setTimestamp()
        .setColor("#2c2d31");
  
      const embed3 = new EmbedBuilder()
        .setTitle("Comandos SFW")
        .setDescription("/falda" + "\n" + "¡Que lida falda tienes!" + "\n" + "/hug" + "\n" + "¡Dale un abrazo a alguien!" + "\n" + "/kiss" + "\n" + "¡Dale un beso a alguien!" + "\n" + "/pats" + "\n" + "¡Acaricia a alguien!" + "\n" + "/slap" + "\n" + "¡Dale una abofetada a un usuario!")
        .setFooter({ text: "Un texto" })
        .setTimestamp()
        .setColor("#2c2d31");
  
      collector.on("collect", async i => {
        if (i.values[0] === "uno") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed], components: [cmp] });
        }
      });
  
      collector.on("collect", async i => {
        if (i.values[0] === "dos") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed1], components: [cmp] });
        }
      });
  
      collector.on("collect", async i => {
        if (i.values[0] === "tres") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed2], components: [cmp] });
        }
      });
  
      collector.on("collect", async i => {
        if (i.values[0] === "cuatro") {
          await i.deferUpdate();
          i.editReply({ embeds: [embed3], components: [cmp] });
        }
      });

    },
  };