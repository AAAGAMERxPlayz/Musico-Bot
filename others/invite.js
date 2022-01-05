const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using me? Great, Thank you! Consider adding it to your server so we can get verify soon")
      .setColor("#F0EAD6")
      .setAuthor('Musico')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Musico to your discord server`, 'https://discordapp.com/oauth2/authorize?&client_id=814398491287748608&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};