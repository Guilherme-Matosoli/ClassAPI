import { AppDataSource } from "../dataSource";
import { Video } from "../entities/Video";

export const videoRepository = AppDataSource.getRepository(Video);