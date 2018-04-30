const Models = require('../models/models.js');
const models = new Models();

class Controller {
    constructor() {
        this.urlsMap = {
            '/': (req) => this.hello(req),
            '/tomato': (req) => this.getTomato(req),
            '/getRecipe': (req) => this.getRecipe(req),
        };
    };

    handleReq(req) {
        const handler = this.urlsMap[req.params[0]];
        const response = handler(req);
        return response;
    }

    hello(req) {
        return 'hello';
    }

    async getTomato(req) {
        console.log('params', req);
        const response = JSON.stringify(await models.getTomato(req.query));
        console.log('response', response);
        return response;
    }

    async getRecipe(req) {
        console.log('get recipe');
        const requestJson = req.body;
        console.log('android request body', requestJson);

        const recipe = [{
            name: 'student pack',
            products: {
                doshic: '1 упаковка',
                whater: "500 мл"
            },
            text: 'Откройте упаковку, залейте кипятком'
        }, {
            name: 'android phone',
            products: {
                govno: '1 кг',
                palki: '3 штуки'
            },
            text: `Возьмите 50 тысяч от своей запрлаты. Пойдите в мтс, купите на эти деньги говна и палок.
            Перемешайте говно и палки. Получите мобильный телефон. Теперь у вас есть телефон на платформе андройд`
        }]


        console.log('request json', requestJson);
        // let response = await models.getRecipe(requestJson.products)
        // response = this.convertProductsToArray(response);
        
        // const responseJson = JSON.stringify(response);
        // return responseJson;
        return recipe;
    }

    convertProductsToArray(response) {
        response.forEach(element => {
            element['recipe_products'] = element['recipe_products'].slice(1, -1).split(',');
        });

        return response;
    }
}

module.exports = Controller;