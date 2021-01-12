import { Application } from "./application";
import * as mongoose from 'mongoose';
import { db } from "./db";

mongoose
    .connect(db.connectionString || process.env.connectionString!.toString(), { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => {
        Application.run();
    });