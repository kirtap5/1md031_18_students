function ItemData() {
    data: {
        name: 'Burger 1';
        Ingredients: ['Bread', 'Biff', 'Gluten'];
        kCal: 500;
    }
    return data;
}

var MenuItem = new Vue({
    data: ItemData(),
    name: data.name,
    ingretients: data.ingretients,
    kCal: data.kCal,
})

const x = 23;
console.log(x);