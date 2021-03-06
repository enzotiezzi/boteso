import { Client, Message } from 'discord.js';
import { CommandHandler } from './commands/command-handler';
import { Output } from './output';

export class Bot {
    initialize() {
        const client = new Client();

        client.on('ready', () => {
            console.log('ready freddie ?');
        });

        client.on('message', (message: Message) => {
            console.log(message.content);
            Output.setCurrentMessage(message);

            if (message.content.substr(0, 1) == "!") {
                CommandHandler.executeCommand(message.content.substr(1, message.content.length - 1));
            }
        });

        client.login(process.env.TOKEN);
    }
}