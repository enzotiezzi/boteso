import { Application } from "./application";
import * as mongoose from 'mongoose';


mongoose
    .connect(process.env.connectionString!, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => {
        Application.run();
    });