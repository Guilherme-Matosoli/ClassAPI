import { AppDataSource } from "../dataSource";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSource.getRepository(Room);