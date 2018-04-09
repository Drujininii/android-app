let button = document.getElementById('submitButton');
let form = document.getElementById('productForm');


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
    fetchPost('/getRecipe', body)
    .catch((err) => {
        console.log(err);
    });
})

console.log('script run');

const backendUrl = 'http://localhost:8081';
function fetchPost(address, body) {
    console.log('fetch post');
    const url = backendUrl + address;
    console.log('url', url);
    const myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json; charset=utf-8');
    return fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        credentials: 'include',
        body: JSON.stringify(body),
        headers: myHeaders
    });
}