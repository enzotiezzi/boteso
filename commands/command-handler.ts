import { Comandos } from './comandos';
import { EventoExecuter } from './evento/evento.executer';
import { Executers } from './executers';
import { IExecuter } from './i-executer';

export class CommandHandler {
    static executeCommand(expression: string) {
        console.log("executando comando: ", expression);
        
        if(expression != null && expression.length > 0) {
            if(expression.indexOf(' ') != -1) {
                const elements = expression.split(' ');
                const command = elements.splice(0, 1)[0];

                const executer = Executers.getExecuter(command);

                if(executer != null)
                    executer.run(elements);
            }
        }
    }
}