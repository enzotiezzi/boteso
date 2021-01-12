import { model, Model, Schema, Document } from "mongoose";

export interface IEvento extends Document{
    nome: string;
    data: string;
    horario: string;
    quantidadeMaximaDePlayers: number;
    tipo: string;
}

export const EventoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    quantidadeMaximaDePlayers: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    }
});

const Evento: Model<IEvento> = model('Evento', EventoSchema);

export default Evento;