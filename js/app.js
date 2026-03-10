// JavaScript code for app logic of Real Estate Marketplace

// Sample code snippet
const properties = [];

function addProperty(property) {
    properties.push(property);
}

function getProperties() {
    return properties;
}

// Example usage
addProperty({id: 1, name: 'Luxury Apartment', price: 500000});
console.log(getProperties());