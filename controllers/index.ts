import { Request, Response } from "express";
import fs from "fs";

export const uploadImage = (req: Request, res: Response) => {
    try {
        const fieldFiles = req.files as { [fieldname: string]: Express.Multer.File[] };
        const files = req.files as Express.Multer.File[];
        if (req.file) {
            fs.readFile(req.file?.path ?? "", "utf-8", (err, res) => {
                console.log(err, res);
                fs.unlinkSync(req.file?.path ?? "");
            })
        } else if (files?.length > 0) {
            files.forEach((file) => {
                fs.readFile(file?.path ?? "", "utf-8", (err, res) => {
                    console.log(err, res);
                    fs.unlinkSync(file?.path ?? "");
                })
            })
        } else if (fieldFiles) {
            fieldFiles.media.forEach((file) => {
                fs.readFile(file?.path ?? "", "utf-8", (err, res) => {
                    console.log(err, res);
                    // fs.unlinkSync(file?.path ?? "");
                })
            })

        }
        res.send("File uploaded")
    } catch (error: any) {
        res.status(400).json({ message: error?.message })
    }
}