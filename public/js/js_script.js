//      Create menu JS:
// MenuItems(food);

//      Click Event JS:
// var submitButton = document.getElementById('submit_button');
// submitButton.onclick = getOrderData;
// submitButton.addEventListener("click", getOrderData);


function getOrderData(){
    let orderData = []
    const gender = document.querySelector('input[name="gender"]:checked');
    const options = document.querySelectorAll('input[name="burgerCheckbox"]:checked');

    orderData.push(document.getElementById('form_name').value);
    orderData.push(document.getElementById('form_email').value);
    orderData.push(document.getElementById('form_payment').value);
    gender != null ? orderData.push(gender.value) : null;

    for (i in options){
        options[i].value != undefined ? orderData.push(options[i].value) : null;
    }

  return orderData;
}

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

