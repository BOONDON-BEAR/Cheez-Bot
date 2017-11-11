const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.send(`Welcome ${member.user} to this server.`);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "add") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    message.channel.send(total);
  }


if (command === "ping") {
message.channel.send("pong");
}

if (command === "help") {
message.channel.send("**That command is coming in version 1.0 of CheezBot.** Please Contact FuntimeCheez or LOADING:black_circle::black_circle::black_circle: for more information");
}


});

client.on('message', message => {
   if (message.content.startsWith("#1568 ")) {
      message.delete(1000); //Supposed to delete message
      message.channel.send(message.content.slice(5, message.content.length));
   }
});

client.login(config.token);
