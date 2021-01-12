import { Application } from "./application";
import * as mongoose from 'mongoose';
import { db } from "./db";

Application.run();

mongoose
    .connect(db.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then();