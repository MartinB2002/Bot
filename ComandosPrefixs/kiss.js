const anime = require('anime-actions');
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('Besa a un usuario.')
    .addUserOption( option =>
      option.setName('usuario')
                  .setDescription('Menciona a un Usuario.')
                  .setRequired(false)
      ),

    async execute(interaction) {

      const member = interaction.options.getUser('usuario') || interaction.user
      
      const url = await anime.kiss();

      const embed = new EmbedBuilder()
        .setDescription(`${interaction.member.toString()} beso a ${member.toString()}`)
       .setColor("DarkButNotBlack")
       .setImage(url)
      
      interaction.reply({ embeds: [embed] })
      
 }
}