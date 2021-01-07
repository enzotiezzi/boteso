import { Client, Message } from 'discord.js';
import { auth } from './auth';

export class Bot {
    initialize() {
        const client = new Client();

        client.on('ready', () => {
            console.log('ready freddy ?');
        });

        client.on('message', (message: Message) => {
            console.log(message.content);
        });

        client.login(auth.TOKEN);
    }
}