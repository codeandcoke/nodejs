import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const movies = {
    'Rocky': {
        description: 'Buena pelicula',
        year: 1980,
        duration: 210,
        room: 1
    },
    'Terminator': {
        description: 'Otra buena pelicula',
        year: 1982,
        duration: 90,
        room: 2
    },
    'Origen': {
        description: 'Una pelicula buena',
        year: 2001,
        duration: 100,
        room: 2
    }
};

app.get('/movies', (req, res) => {
    return res.status(200).json(movies);
});

app.get('/movies/:title', (req, res) => {
    const title = req.params.title;
    if (movies[title] === undefined) {
        return res.status(404).json({
            error: 'No se ha podido encontrar la pelicula'
        });
    }

    return res.status(200).json(movies[title]);
});

app.post('/movies', (req, res) => {
    const title = req.body.title;
    if (movies[title] !== undefined) {
        return res.status(400).json({
            error: 'La pelicula ya existe'
        });
    }
    const description = req.body.description;
    if (title === undefined || description === undefined) {
        return res.status(400).json({
            error: 'El titulo y el argumento son obligatorios'
        });
    }
    const year = req.body.year;
    const duration = req.body.duration;
    if (typeof duration !== 'number' || duration <= 0) {
        return res.status(400).json({
            error: 'La duración tiene que ser un número mayor que cero'
        });
    }
    const room = req.body.room;
    if (typeof room !== 'number' || room < 1 || room > 9) {
        return res.status(400).json({
            error: 'La sala tiene que ser un número entre 1 y 9'
        });
    }

    movies[title] = {
        description: description,
        year: year,
        duration: duration,
        room: room
    };

    return res.status(201).json(movies[title]);
});

app.delete('/movies/:title', (req, res) => {
    const title = req.params.title;
    if (movies[title] === undefined) {
        return res.status(404).json({
            error: 'No se ha podido encontrar la pelicula'
        });
    }

    delete movies[title];

    return res.status(204).end();
});

app.put('/movies/:title', (req, res) => {
    const title = req.params.title;
    if (movies[title] === undefined) {
        return res.status(404).json({
            error: 'No se ha podido encontrar la pelicula'
        });
    }
    const description = req.body.description;
    const year = req.body.year;
    const duration = req.body.duration;
    const room = req.body.room;

    movies[title] = {
        altitude: description,
        population: year,
        duration: duration,
        room: room
    };

    return res.status(200).json(movies[title]);
});


app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});