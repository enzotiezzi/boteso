import { Message } from "discord.js";

export class Output {
    private static _currentMessage: Message;

    static getCurrentMessage(): Message {
        return this._currentMessage;
    }

    static setCurrentMessage(value: Message): void {
        this._currentMessage = value;
    }
}