import knex from 'knex';

// Configuración de la base de datos: tipo, ubicación y otros parámetros
export const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'cities.db'
    },
    useNullAsDefault: true
});
