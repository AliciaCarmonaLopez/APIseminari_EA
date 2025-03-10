// src/controllers/subject_controller.ts
import express, { Request, Response } from 'express';
import { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject, getSubjectStudents } from './subject_service.js';


export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await createSubject(req.body); // paràmetres que van al cos en format json
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllSubjects();
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getSubjectStudentsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectStudents(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const data = await getSubjectById(req.params.id); //paràmetres que van a la url
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await updateSubject(req.params.id, req.body);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const data = await deleteSubject(req.params.id);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
