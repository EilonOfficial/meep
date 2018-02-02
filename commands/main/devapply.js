const { Command } = require("discord.js-commando");
const Discord = require("discord.js");

class DevApplyCommand extends Command {
    constructor(client) {
        super(client, {
            name:'devapply',
            memberName:'devapply',
            guildOnly: true,
            group:'main',
            description:'N/A',
            args: [

                {
                    key:'Ign',
                    prompt:'What Is Your Minecraft IGN (In Game Name)?',
                    type:'string'
                },
                {
                    key:'Why',
                    prompt:'Why do you want to be Developer for PhantomNetwork?',
                    type:'string',
                    wait: 300
                },
                {
                    key:'WhatType',
                    prompt:'What type of Developer are you? (Configger, Coder/Programmer)',
                    type:'string',
                    wait: 120
                },
                {
                    key:'WhatLangs',
                    prompt:'What languages do you know?',
                    type:'string',
                    wait: 180
                },
                {
                   key:'portfolio',
                   prompt:'Can you provide a portfolio of your work or a github or spigot?',
                   type:'string',
                   wait: 180 
                },
                {
                    key:'simplequestion',
                    prompt:'**Simple Question:** What is boolean?',
                    type:'string',
                    validate: text => {
                        if (text.includes("true") || text.includes("false") || text.includes("return") || text.includes("on") || text.includes("off") || text.includes("1") || text.includes("0")) return true;
                        return 'You have not answered the question correctly. You are most likely not fit for a developer, you may try again, bellow, or reapply later on.';
                    }    
                }
            ]
        })
    }

    async run(message, { Ign, Why, WhatType, WhatLangs, portfolio, simplequestion }) {
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter("Developer Application")
        .setTimestamp(message.createdAt)
        .addField("Ign", Ign)
        .addField("Why do you want to be Developer for PhantomNetwork?", Why)
        .addField("What type of Developer are you? (Configger, Coder/Programmer)", WhatType)
        .addField("What languages do you know?", WhatLangs)
        .addField("Can you provide a portfolio of your work or a github or spigot?", portfolio)
        .addField("**Simple Question:** What is boolean?", simplequestion)
        message.guild.channels.get("404492881143791617").send({embed});
    }
}

module.exports = DevApplyCommand;
