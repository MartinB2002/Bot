
const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName("whois")
    .setDescription(`Da la informacion de un usuario del server.`)
    .addUserOption(option => option.setName(`user`).setDescription(`the user you want to get info from`).setRequired(false)),
    async execute (interaction, client) {

        const formatter = new Intl.ListFormat(`en-GB`, { style: `narrow`, type: `conjunction` });
        
        //Change the emojis down below
        const badges = {
            BugHunterLevel1: "<:emoji_8:1069620175206371468>",
            BugHunterLevel2: "<:emoji_9:1069620226309754930>",
            HypeSquadOnlineHouse1: "<:dtchouse1:1087580413679120444>",
            HypeSquadOnlineHouse2: "<:dtchouse2:1087580474718814290>",
            HypeSquadOnlineHouse3: "<:dtchouse3:1087580517995663502> ",
            Hypesquad: "<:emoji_11:1069620624512798740>",
            Partner: "<:emoji_12:1069620953442680884>",
            PremiumEarlySupporter: "<:emoji_13:1069621437792530482>",
            Staff: "<:emoji_14:1069621745910292540>",
            VerfiedDeveloper: "<:emoji_15:1069621896154447992>",
            ActiveDeveloper: "<:dtcdev:1087580652817350706>",
        }

        const user = interaction.options.getUser(`user`) || interaction.user;
        const userFlags = user.flags.toArray();
        const member = await interaction.guild.members.fetch(user.id);
        const topRoles = member.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(role => role)
        .slice(0, 1)
        const banner = await (await client.users.fetch(user.id, { force: true })).bannerURL({ size: 4096 });
        const booster = member.premiumSince ? `<:boosterdtc:1087580561498980362> Yes` : `No`; //Change the emoji
        const ownerE = `<:ownerVisual:1091515239150919801>,`// change the server owner emoji
        const devs = `<:VisualDev:1091531736267116716>,` // change the bot dev emoji
        const owners = [
            `Your User Id`, // id for the devs of the bot
        ]
        const MutualServers = []
        const JoinPosition = await interaction.guild.members.fetch().then(Members => Members.sort((a, b) => a.joinedAt - b.joinedAt).map((User) => User.id).indexOf(member.id) + 1)

        for (const Guild of client.guilds.cache.values()) {
            if (Guild.members.cache.has(member.id)) {
                MutualServers.push(`[${Guild.name}](https://discord.com/guilds/${Guild.id})`)
            }
        }

        const bot = new EmbedBuilder() // you can remove this if you want
        .setColor(`Red`)
        .setDescription(`Bots are not available`)
        if (member.user.bot) return await interaction.channel.sendTyping(), await interaction.reply({ embeds: [bot]});

        const embed = new EmbedBuilder()
        .setAuthor({ name: `information`, iconURL: member.displayAvatarURL()})
        .setTitle(`**${member.user.tag}** ${userFlags.length ? formatter.format(userFlags.map(flag => `${badges[flag]}`)) : ` `}`)
        .setColor(`ffffff`)
        .setThumbnail(member.displayAvatarURL())
        .setDescription(`**Id** - ${member.id}\n• **Boosted** - ${booster}\n• **Top Role** - ${topRoles}\n• **Joined** - <t:${parseInt(member.joinedAt / 1000)}:R>\n• **Discord User** - <t:${parseInt(user.createdAt / 1000)}:R>`)
        .addFields({ name: `Banner`, value: banner ? " " : "None"})
        .setImage(banner)
        .setFooter({ text: `${member ? `Join Position - ${JoinPosition} | ` : ''}Mutual Servers - ${MutualServers.length}`})
        
        // if the member id is equal to server owner
        if (member.id == interaction.guild.ownerId) {
            embed
            .setTitle(`**${member.user.tag}** ${ownerE} ${userFlags.length ? formatter.format(userFlags.map(flag => `${badges[flag]}`)) : ` `}`)
        }
        // if the member id is equal to the bot owners
        if (owners.includes(member.id)) {
            embed
            .setTitle(`**${member.user.tag}** ${devs} ${userFlags.length ? formatter.format(userFlags.map(flag => `${badges[flag]}`)) : ` `}`)
        }
        // if the member id is equal to server owner and bot owners
        if (owners.includes(member.id) && member.id == interaction.guild.ownerId) {
            embed
            .setTitle(`**${member.user.tag}** ${devs} ${ownerE} ${userFlags.length ? formatter.format(userFlags.map(flag => `${badges[flag]}`)) : ` `}`)
        }

        await interaction.channel.sendTyping(), await interaction.reply({ embeds: [embed] });
    }
}