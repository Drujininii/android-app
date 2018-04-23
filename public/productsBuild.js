'use strict';

const products = [
    {
        name: 'seld',
        rusName: 'сельдь'
    },
    {
        name: 'gavno',
        rusName: 'говно'
    },
    {
        name: 'palki',
        rusName: 'палки'
    },
    {
        name: 'tomato',
        rusName: 'томат'
    },
    {
        name: 'cucumber',
        rusName: 'огурец'
    },
    {
        name: 'hren',
        rusName: 'хрен'
    }
]

function makeProd({name, rusName}) {
    const prodEl = document.createElement('div');
    prodEl.innerHTML = `<div>
    <input type="checkbox" id="${name}" name="products" value="${rusName}">
    <label for="${name}">${rusName}</label>
    </div>`
    const form = document.getElementById('productForm');
    form.insertBefore(prodEl, form.firstChild);
}

products.forEach((prod) => {
    makeProd(prod);
})