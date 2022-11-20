import { Request, Response } from "express";
import { subjectRepository } from "../repositories/SubjectRepository";


export class SubjectController{
    async create(req: Request, res: Response){
        const { name } = req.body;

        if(!name){
            return res.status(400).json({'message': 'The name is required'})
        };

        try{
            const newSubject = subjectRepository.create({ name });

            await subjectRepository.save(newSubject);
            
            return res.status(201).json({newSubject});
        }catch(err){
            console.error(err);
            return res.status(500).json({'message': 'Internal Server Error'})
        };
    }
}