let button = document.getElementById('submitButton');
let form = document.getElementById('productForm');
let answerField = document.getElementById('answerField');


button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('try to submit');
    console.dir(form);
    let productsArray = [];
    [...form.elements].forEach((element) => {
        console.dir(element);
        if (element.type === "checkbox" && element.checked) {
            productsArray.push(element.value);
        }
        console.log('products', productsArray);
    })
    const body = {
        products: productsArray,
    }
    fetchPost('getRecipe', body)
    .then((resp) => {
        console.log('resp ok');
        console.dir(answerField);
        resp.json()
        .then((body) => {
            console.log(typeof body, body);
            let innerText = body.reduce((str, elem) => {
                let products = '';
                for (let prod in elem.products) {
                    products += `${prod}: ${elem.products[prod]},\n`;
                }
                str += `{\n____recipe_name: ${elem.recipe_name}\n} 
                {
                    ____recipe_products: \n________[${elem.recipe_products}]
                } \n{
                    ____recipe_text: ${elem.recipe_text}
                } \n\n`;
                return str;
            }, '');
            answerField.innerText = innerText;
        })
        
    })
    .catch((err) => {
        console.log(err);
    });
})

console.log('script run');

const backendUrl = `${window.location.href}`;
function fetchPost(address, body) {
    console.log('fetch post');
    const url = backendUrl + address;
    console.log('url', url);
    const myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json; charset=utf-8');
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(body),
        headers: myHeaders
    });
}