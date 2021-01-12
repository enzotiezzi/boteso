import { Application } from "./application";
import * as mongoose from 'mongoose';
import { db } from "./db";
import Evento, { IEvento } from "./schemas/evento.schema";

Application.run();

mongoose.connect(db.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async _ => {
    const evento: IEvento = await Evento.create({
        nome: "noite pvp",
        data: "11/02/2021",
        horario: "21:00",
        quantidadeMaximaDePlayers: 99,
        tipo: "PVP"
    });

    console.log("Evento: ", evento.nome);
});