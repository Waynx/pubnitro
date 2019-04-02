const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

const activities_list = [
    "FREE NITRO", 
    "5 INVITES",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index],{
            type: "STREAMING",
            url: "https://www.twitch.tv/free_nitro"});
 
    }, 3000); // Runs this every 10 seconds. 1000 = 1seconde
});
console.log("Ready.");

bot.on("message", function(message) {
	if(message.content == "Salut") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('https://discord.gg/Vk4RW6w')
		
		});
	}
});
