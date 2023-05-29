import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Database connection successful");

        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    } catch (err) {
        console.log('Failed to connect to database', err);
    }
}

bootstrap();