import { Role } from "discord.js";
import { Output } from "../../output";
import { IExecuter } from "../i-executer";

export class FaccaoExecuter implements IExecuter {
    async run(args: string[]): Promise<void> {
        const faccao = args[0];
        const message = Output.getCurrentMessage();

        console.log("Facção escolhida: ", faccao);

        const guild = message.guild;

        let role: Role;

        let termo = "";

        switch (faccao) {
            case 'azul':
                termo = "daggerfall";
                break;
            case 'vermelho':
                termo = "ebonheart";
                break;
            case "amarelo":
                termo = "aldmeri";
                break;
            default:
                termo = "membro";
        }

        role = guild?.roles.cache.find(x => x.name.toLowerCase() == termo)!;

        message.member?.roles.add(role);

        message.member?.createDM().then(x => {
            x.send("Bem vindo\nAgora você é um membro da Brazilian Squad");
        });

        message.delete();
    }
}