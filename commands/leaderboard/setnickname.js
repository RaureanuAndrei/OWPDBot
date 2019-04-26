const {Command} = require('discord.js-commando');
const {RichEmbed} = require('discord.js');
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

module.exports = class SetNicknameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setnickname',
            group: 'leaderboard',
            memberName: 'setnickname',
            description: 'Sets a nickname for a user',
            guildOnly: true,
            userPermissions: ['MANAGE_MESSAGES'],
            examples: ['setnickname @User nickname'],
            args: [
                {
                    key: 'member',
                    prompt: 'Which user do you want to set a nickname?',
                    type: 'member'
                },
                {
                    key: 'nickname',
                    prompt: 'What is the nickname you want to set?',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, {member, nickname}) {
        // need to return something btw
        
    }
}