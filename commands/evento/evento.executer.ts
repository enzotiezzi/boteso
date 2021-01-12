import { IExecuter } from "../i-executer";
import Evento, { EventoSchema, IEvento } from "../../schemas/evento.schema";

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

            console.log("evento criado com sucesso: ", evento.nome);
        }
    }
}