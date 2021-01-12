import { Output } from "../../output";
import Evento, { IEvento } from "../../schemas/evento.schema";
import { IExecuter } from "../i-executer";

export class ListarEventosExecuter implements IExecuter{
    async run(args: string[]): Promise<void> {
        const eventos: IEvento[] = await Evento.find({ ativo: true });

        let outputMessage = "";

        eventos.forEach(x => {
            outputMessage += `\n${x.nome} ${x.data} ${x.horario} ${x.quantidadeMaximaDePlayers} ${x.tipo}`;
        });

        Output.getCurrentMessage().reply(outputMessage);
    }
}