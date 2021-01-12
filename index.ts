import { Application } from "./application";
import * as mongoose from 'mongoose';

mongoose
    .connect(process.env.connectionString!.toString(), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => {
        Application.run();
    });