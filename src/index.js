import setupServer from "./server.js";
import { initMongoDB } from "./db/initMongoConnection.js";

const bootstrap = async () => {
    try {
        await initMongoDB();
        setupServer();
    } catch (error) {
        console.error("Failed to initialize the application:", error);
        process.exit(1); // Exit the process with a failure code
    }
};

bootstrap();
