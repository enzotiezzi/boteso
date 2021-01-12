import { IExecuter } from "../i-executer";
import Evento, { EventoSchema, IEvento } from "../../schemas/evento.schema";
import { Output } from "../../output";

export class CriarEventoExecuter implements IExecuter{
    async run(args: string[]): Promise<void> {
        // !criar-evento FarmPVP 11/01/2020 21:00 99 PVP

        if(args.length == 5) {
            const evento: IEvento = await Evento.create({
                nome: args[0],
                data: args[1],
                horario: args[2],
                quantidadeMaximaDePlayers: parseInt(args[3]),
                tipo: args[4],
                ativo: true
            });

            const outputMessage = `\nEvento ${evento.nome} criado com sucesso.\nSeu Evento irá acontecer no dia ${evento.data} no horário ${evento.horario}.\nQuantidade máxima de players: ${evento.quantidadeMaximaDePlayers}.\nTipo do evento: ${evento.tipo}`;

            Output.getCurrentMessage().reply(outputMessage);
        }
        else {
            Output.getCurrentMessage().reply("Erro ao criar evento!!\nA quantidade de parâmetros está incorreta.\nExemplo de comando: !criar-evento FarmPVP 11/01/2020 21:00 12 PVP");
        }
    }
}