import multer from "multer";

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, "./uploads")
    },
    filename(req, file, callback) {
        callback(null, `yt-${file.originalname}`)
    },
});

export const upload = multer({
    storage,
    fileFilter(req, file, callback) {
        if (["text/html", "text/css", "application/javascript"].includes(file.mimetype)) {
            callback(new Error("Only Images are allowed to upload"));
        } else {
            callback(null, true);
        }
    },
});
