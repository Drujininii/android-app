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
        return "1";
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