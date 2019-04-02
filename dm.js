const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login(process.env.TOKEN);

const activities_list = [
    "ＢＯＢ 𝓁'𝑒́𝓅𝑜𝓃𝑔𝑒𝓊𝓇", 
    "Chuis trop rallouh 📸",
    "💛",
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index],{
            type: "STREAMING",
            url: "https://www.twitch.tv/wds_fr"});
 
    }, 3000); // Runs this every 10 seconds. 1000 = 1seconde
});
console.log("Ready.");

bot.on("message", function(message) {
	if(message.content.toLowerCase() == "$dm@pub") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('{ @everyone }\n:arrow_upper_right: Bonsoir ou bien le bonjour à vous,\n__Vous aimez les serveurs PvP Faction?__\nAlors ce serveur est fait pour vous encours\n\nJe vous annonce l"ouverture des portes de notre serveur minecraft " **Volana  | PvP Faction** " **Farm2Win & Pay2Win** ouverture non définie pour le moment **__rejoignez-nous__** sur notre discord pour en savoir plus !\n\n────────────────────────────────\n\n:boom: **__Descriptifs du serveur:__**\n\n:arrow_forward:  Sous launcher 1.7.10\n:arrow_forward:  Version serveur 1.7.10\n:arrow_forward:  Plein de kits, et de grades Farm2Win,\n:arrow_forward:  Plein de kits, et de grades Achetable via notre boutique sur le site,\n:arrow_forward:  Plusieurs évents inédits !\n:arrow_forward: Serveur Pay2Win & Farm2Win,\n:arrow_forward:  Plus x1 kit d"ouverture d"offert pour chacun de vous qui rejoignez !\n\n────────────────────────────────\n\n\n:timer: **__Date d"ouverture:__**\n\n:arrow_forward: *Non définie pour le moment..*\n:arrow_forward: Plus x1 kit de"ouverture offert !\n\n────────────────────────────────\n\n**__Rejoignez-nous »:__**\nhttps://discord.gg/GAJ76m6\n\nCordialement, le staff de Volana.\nEn vous souhaitant une agréable soirée/journée à vous tous.')
		
		});
	}
});
