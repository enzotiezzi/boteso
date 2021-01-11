import { Evento } from "../../models/evento/evento.model";
import { Comandos } from "../comandos";
import { IExecuter } from "../i-executer";

export class EventoExecuter implements IExecuter{
    run(args: string[]): void {
        // !criar-evento FarmPVP 11/01/2020 21:00 99 PVP

        if(args.length == 5){
            const evento = new Evento(args[0], args[1], args[2], parseInt(args[3]), args[4]);
        }
    }
}