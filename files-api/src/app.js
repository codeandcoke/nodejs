const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');

const IMAGES_PATH = './images/';
const app = express();
app.use(express.json());
app.use(cors());
// La carpeta de las imágenes se sirve estáticamente (http://localhost:8080/imagen_de_ejemplo.png)
app.use(express.static(IMAGES_PATH))

const multerStorage = multer.diskStorage({
    destination: IMAGES_PATH,
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1000);
        const extension = file.mimetype.slice(file.mimetype.indexOf('/') + 1);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
    }
});
const upload = multer({storage: multerStorage});

app.post('/images', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            message: 'No image provided'
        });
    }

    if (!fs.existsSync(IMAGES_PATH)) {
        fs.mkdirSync(IMAGES_PATH);
    }

    // TODO Guardar los datos y el nombre de la foto en la base de datos
    console.log(req.body.title);
    console.log(req.file.filename);

    return res.json({
        message: 'Image uploaded successfully',
        filename: req.file.fieldname
    });
});

app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});
