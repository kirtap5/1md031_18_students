 /*jslint es5:true, indent: 2 */
 /*global Vue, io */
 /* exported vm */

'use strict';
var socket = io();

var menuInstance = new Vue({
    el: "#page",
    data: {
        burgers: food,
        orderInfo: [],
        orders: {},
        tempTarget: {
          details: {
            x: null,
            y: null,
          },
          key: "T",
        }
    },
    methods: {

          displayOrder: function (event) {
            var offset = {
              x: event.currentTarget.getBoundingClientRect().left,
              y: event.currentTarget.getBoundingClientRect().top
            };
      
            this.tempTarget.details.x = event.clientX - 10 - offset.x,
            this.tempTarget.details.y = event.clientY - 10 - offset.y
          },
      
          addOrder: function () {
            this.orderInfo = getOrderData()
            socket.emit("addOrder", {
              orderId: null,
  
              details: {
                x: this.tempTarget.details.x,
                y: this.tempTarget.details.y
              },
              orderItems: this.orderInfo
            });
          }
    },
});