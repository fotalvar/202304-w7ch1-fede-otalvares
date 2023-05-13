import "./loadEnvironments.js";
import createDebug from "debug";
import chalk from "chalk";
import mongoose from "mongoose";
import app from "./server/index.js";

const debug = createDebug("robots-api:robots");

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug(
    `an ${chalk.redBright(
      `An Error has ocurred`
    )} and cant connect to the server`
  );
  process.exit(1);
}

app.listen(port, () => {
  debug(`Listening on ${chalk.greenBright(`http://localhost:${port}`)}`);
});

try {
  await mongoose.connect(mongoDbConnection);
} catch {
  debug(chalk.redBright("Can't connect to the data base"));
}
