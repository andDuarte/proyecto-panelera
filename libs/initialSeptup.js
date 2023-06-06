import Role from '../models/Role.js';
import Category from '../models/category.js';

export const createRoles = async () => {
    try {
        // Busca si ya existen documentos
        const count = await Role.estimatedDocumentCount();

        // Si el contador de roles es > 0 retorna
        if (count > 0) return;

        // Si el contador es == 0, crea los roles
        const values = await Promise.all([
            // Esto lo que hace es ejecutar todas las promesas al mismo tiempo, gana rendimiento en el server
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save()
        ]);

        // console.log(values);

    } catch (error) {
        console.error(error);
    }

}

export const createCategory = async () => {
    try {
        // Busca si ya existen documentos
        const count = await Category.estimatedDocumentCount();

        // Si el contador de roles es > 0 retorna
        if (count > 0) return;

        // Si el contador es == 0, crea los roles
        const values = await Promise.all([
            // Esto lo que hace es ejecutar todas las promesas al mismo tiempo, gana rendimiento en el server
            new Category({ name: 'Maquinaria' }).save(),
            new Category({ name: 'Herramientas' }).save(),
            new Category({ name: 'Insumos' }).save(),
            new Category({ name: 'Produccion' }).save()
        ]);

        // console.log(values);

    } catch (error) {
        console.error(error);
    }

}