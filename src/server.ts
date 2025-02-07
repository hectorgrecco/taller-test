import express from "express";
import taskRouter from "./routes/Task";

class Server {
    private readonly app: express.Application;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = +process.env.PORT! || 3100;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/tasks", taskRouter);
    }

    start() {
    this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
    });
    }
}

const server = new Server();
server.start();
