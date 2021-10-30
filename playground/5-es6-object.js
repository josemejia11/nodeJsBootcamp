// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Phili'
}

// console.log(user);

// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    bla: 4
}

// const label = product.label;
// const stock = product.stock;

// const {label: labelProduct, stock, bla = 5} = product;
// console.log(labelProduct);
// console.log(stock);
// console.log(bla);

const transaction = (type, { label, stock } = {}) => {
    console.log(type, label, stock);
}

transaction('order', product);