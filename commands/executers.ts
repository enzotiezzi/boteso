import { Comandos } from "./comandos";
import { EventoExecuter } from "./evento/evento.executer";
import { IExecuter } from "./i-executer";

export class Executers {
    static executers: Map<string, IExecuter> = new Map([
        [Comandos.CRIAR_EVENTO, new EventoExecuter()]
    ]);;

    static getExecuter(type: string): IExecuter | null {
        const executer = this.executers.get(type);

        if(executer != undefined) return executer;

        return null;
    }
}