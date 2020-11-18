var vm = new Vue({
    el: "#wrapper",
    data: {
        burgers: food,
    },
});

var vm = new Vue({
    el: "#orderDescription",
    data: {
        burgers: food,
        orderInfo: []
    },
    methods: {
        submitOrder: function () {
            this.orderInfo = getOrderData()
            console.log(this.orderInfo);
        }
    },
});