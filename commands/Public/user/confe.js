const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anonimo")
    .setDescription("Haz una confesión anonima")
    .addStringOption((option) =>
      option
        .setName(`contenido`)
        .setDescription(`Escribe aquí lo que quieres que diga en la confesión`)
        .setRequired(true)
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction){
  const sugerencia = interaction.options.getString(`contenido`);

    const { guild } = interaction;

    const channel = interaction.guild.channels.cache.find(
      (c) => c.id === `1142930883431645224`
    );

    const embed = new EmbedBuilder()
      .setTitle(`Anónimo escribió`)
      .setColor(`Random`)
      .setDescription(`${sugerencia}`)
      .setThumbnail(`https://media.discordapp.net/attachments/1017460181824721006/1120451824835633162/57-578421_totoro-and-no-face-hd-png-download.png?width=907&height=700`)
      .setFooter({
        text: `${guild.name}`,
        iconURL: `${guild.iconURL({ dynamic: true })}`,
      });

    const message = await channel.send({
      embeds: [embed],
    });

    interaction.reply({
      content: `Publicaste exitosamente tu confesión.`,
      ephemeral: true,
    });
  },
};