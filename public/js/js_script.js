function MenuItems(food) {
    for (item in food){
        createMenuCard(food[item]);
    }
}

function createMenuCard(item) {
    var wrapper = document.getElementById('wrapper');

    var card = document.createElement('div');
    var h1 = document.createElement('h1');
    var img = document.createElement('img');
    var ul = document.createElement('ul');
    var liOne = document.createElement('li');
    var liTwo = document.createElement('li');
    var liThree = document.createElement('li');

    wrapper.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
    card.appendChild(ul);
    ul.appendChild(liOne);
    ul.appendChild(liTwo);
    ul.appendChild(liThree);

    img.setAttribute('src', item.img);
    h1.innerHTML = item.name;
    liOne.innerHTML = item.kCal;
    liTwo.innerHTML = item.lactose ? "Laktos" : "Laktosfri";
    liThree.innerHTML = item.gluten ? "Gluten" : "Glutenfri";
    }
    
MenuItems(food);