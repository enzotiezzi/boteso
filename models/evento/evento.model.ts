export class Evento {
    nome: string;
    data: string;
    horario: string;
    quantidadeMaximaDePlayers: number;
    tipo: string;

    constructor(nome: string, data: string, horario: string, quantidadeMaximaDePlayers: number, tipo: string) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
        this.quantidadeMaximaDePlayers = quantidadeMaximaDePlayers;
        this.tipo = tipo;
    }
}