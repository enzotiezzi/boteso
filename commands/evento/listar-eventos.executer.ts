import Evento, { IEvento } from "../../schemas/evento.schema";
import { IExecuter } from "../i-executer";

export class ListarEventosExecuter implements IExecuter{
    async run(args: string[]): Promise<void> {
        const eventos: IEvento[] = await Evento.find({ ativo: true });

        eventos.forEach(x => {
            console.log("Evento ativo: ", x.nome);
        });
    }
}