import axios from 'axios';
import { notifyError, notifyOk } from './dialogUtil.js';
import { el } from './documentUtil.js';

window.registerImage = function() {
    const title = el('title').value;
    if (title === '') {
        notifyError('El titulo es un campo obligatorio');
        return;
    }
    const imageFile = el('image').files[0];

    // Prepara los datos del formulario para ser enviados al backend
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', imageFile);
    axios.post('http://localhost:8080/images', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        notifyOk('Los datos se han registrado correctamente');
    }).catch((error) => {
        notifyError('Se ha producido un error al enviar los datos');
        console.log(error);
    });

    el('title').value = '';
};