const pgp = require("pg-promise")();
if (process.env.NODE_ENV === 'develop') {
    console.log('devepol');
    const db = pgp("postgres://igor:qwerty@localhost:5432/android_app");
} else {
    const db = pgp(process.env.DATABASE_URL);
}

class Models {
    constructor() {
    }

    getTomato(params) {
        if (!params.n) {
        return db.any(`
            SELECT * FROM app_recipes
            `)
            .then(function (data) {
                console.log("DATA:", data);
                return data;
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
        } else {
            return db.any(`
            SELECT * FROM app_recipes
            WHERE recipe_id = $1;
            `, params.n)
            .then(function (data) {
                console.log("DATA:", data);
                return data;
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
        }
    }


    getRecipe(products) {
        console.log('producst array', products);
        return db.any(`
            SELECT * FROM app_recipes
            WHERE recipe_name IN ($1:csv)
            `, [products])
            .then(function (data) {
                console.log("DATA:", data);
                return data;
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
    }
};

module.exports = Models;