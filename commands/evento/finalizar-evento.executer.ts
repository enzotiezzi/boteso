import { Output } from "../../output";
import Evento from "../../schemas/evento.schema";
import { IExecuter } from "../i-executer";

export class FinalizarEventoExecuter implements IExecuter {
    async run(args: string[]): Promise<void> {
        const message = Output.getCurrentMessage();

        if (args.length != 1)
            message.reply("Erro ao finalizar evento.\nExemplo de uso: !finalizar-evento [Nome do Evento]");
        else { 
            if(message.member?.roles.cache.find(x => x.name == "Admin")){
                const evento = await Evento.findOne({ nome: args[0], ativo: true });
                
                if(evento != null) {
                    evento.ativo = false;
                    evento.save();

                    console.log(evento.nome, evento.ativo);

                    message.reply("Evento finalizado com sucesso.");
                }
                else {
                    message.reply("Não foi possível encontrar evento com o nome " + args[0]);
                }
            }
            else {
                message.reply("Somente um admin pode finalizar o evento.");
            }
        }
    }
}