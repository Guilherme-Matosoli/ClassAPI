import express from 'express';
import { AppDataSource } from './dataSource';
import routes from './routes';

const PORT = process.env.PORT as number | undefined;

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());
    app.use(routes)


    return app.listen(
        PORT,
        () => console.log(`Server is running on port ${PORT}`)
        );
});
