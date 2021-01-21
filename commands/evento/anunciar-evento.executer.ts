import { Output } from "../../output";
import Evento from "../../schemas/evento.schema";
import { IExecuter } from "../i-executer";

export class AnunciarEventoExecuter implements IExecuter {
    async run(args: string[]): Promise<void> {
        const message = Output.getCurrentMessage();

        if (args.length == 1) {
            const nomeEvento = args[0];

            const evento = await Evento.findOne({ ativo: true, nome: nomeEvento });

            if (evento) {
                const membros = message.guild?.members.cache;

                membros?.forEach(async x => {
                    var dm = x.createDM()
                        .then(y => y.send(`Evento **${evento.nome}**.\nDia **${evento.data}** às **${evento.horario}**.\nO limite de players para esse evento é de **${evento.quantidadeMaximaDePlayers}**.\nTipo: **${evento.tipo}**`))
                        .catch((error) => console.log(error));
                });
            }
            else {
                message.reply("Não foi possível encontrar evento ativo com o nome: " + nomeEvento);
            }
        }
        else {
            message.reply("Comando inválido. Exemplo: !anunciar-evento NomeDoEvento");
        }
    }
}