import { Comandos } from './comandos';
import { CriarEventoExecuter } from './evento/evento.executer';
import { Executers } from './executers';
import { IExecuter } from './i-executer';

export class CommandHandler {
    static executeCommand(expression: string) {
        console.log("executando comando: ", expression);

        let command = "";
        let elements: string[] = [];

        if (expression != null) {

            if (expression.indexOf(' ') != -1) {
                elements = expression.split(' ');
                command = elements.splice(0, 1)[0];
            }
            else
                command = expression;

            const executer = Executers.getExecuter(command);

            if (executer != null)
                executer.run(elements);
        }
    }
}