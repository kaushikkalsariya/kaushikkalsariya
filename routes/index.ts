import { NextFunction, Request, Response, Router } from "express";
import { uploadImage } from "../controllers";
import { upload } from "../helper/upload";

const multerErrorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        res.status(400).json({ message: err.message });
    } else {
        next();
    }
};

const router = Router();

// router.post('/', upload.any(), uploadImage);
router.post('/', upload.single('media'), multerErrorHandling, uploadImage);
// router.post('/', upload.array("media", 2), uploadImage);
// router.post('/', upload.fields([{ name: "media", maxCount: 2 }, { name: "video", maxCount: 1 }]), uploadImage);

export default router