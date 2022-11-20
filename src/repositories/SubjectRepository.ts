import { AppDataSource } from "../dataSource";
import { Subject } from "../entities/Subject";

export const subjectRepository = AppDataSource.getRepository(Subject);