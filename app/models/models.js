const pgp = require("pg-promise")();
let db;
if (process.env.NODE_ENV === 'develop') {
    console.log('devepol');
    db = pgp("postgres://igor:qwerty@localhost:5432/android_app");
} else {
    db = pgp("postgres://igor:qwerty@localhost:5432/android_app");
}

class Models {
    constructor() {
    }

    getTomato(params) {
        return "1";
    }

    getRecipe(products) {
        console.log('products array', products);
        return db.any(`
            SELECT recipe_id, recipe_name, recipe_text, recipe_products FROM app_recipes
            WHERE recipe_products <@ ($1::citext[])
            `, [products])
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            });
    }
};

module.exports = Models;