const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials;

const client = new Client({
     intents: 3276799,
     partials: [User, Message, GuildMember, ThreadMember]
    });

    const { loadEvents } = require("./Handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.prefixs = new Collection();

loadEvents(client);

client.login(client.config.token);

 
