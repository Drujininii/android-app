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
        console.log('request json', requestJson);
        const response = JSON.stringify(await models.getRecipe(requestJson.products));
        console.log('respons from db', response);
        return response;
    }
}

module.exports = Controller;