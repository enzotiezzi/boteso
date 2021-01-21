import { Comandos } from "./comandos";
import { AnunciarEventoExecuter } from "./evento/anunciar-evento.executer";
import { CriarEventoExecuter } from "./evento/evento.executer";
import { ListarEventosExecuter } from "./evento/listar-eventos.executer";
import { FaccaoExecuter } from "./faccao/faccao.executer";
import { IExecuter } from "./i-executer";

export class Executers {
    static executers: Map<string, IExecuter> = new Map([
        [Comandos.CRIAR_EVENTO, new CriarEventoExecuter()],
        [Comandos.LISTAR_EVENTOS, new ListarEventosExecuter()],
        [Comandos.ESCOLHER_FACCAO, new FaccaoExecuter()],
        [Comandos.ANUNCIAR_EVENTO,  new AnunciarEventoExecuter()]
    ]);;

    static getExecuter(type: string): IExecuter | null {
        const executer = this.executers.get(type);

        if(executer != undefined) return executer;

        return null;
    }
}