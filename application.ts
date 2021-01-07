import { Bot } from "./bot";

export class Application {
    static run () {
        new Bot().initialize();
    }
}