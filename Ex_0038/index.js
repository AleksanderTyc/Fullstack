const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }

];

// This won't work - cash is modified later in the code
const cashInRegister = 100;
const orderQueue = [];
// This won't work - nextOrderId is modified later in the code
const nextOrderId = 1;
// Changing both const's into let's makes the code usable, but this is not the point of the exercise.

function addNewPizza(newPizza) {
    menu.push(newPizza);
}

function placeOrder(pizzaName) {
    const pizzaOrder = menu.filter(elem => elem.name === pizzaName)[0];
    // Their way: menu.find(elem => elem.name === pizzaName);
    cashInRegister += pizzaOrder.price;
    const newOrder = { pizza: pizzaOrder, status: "ordered", orderId: nextOrderId++ };
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId) {
    const orderIndex = orderQueue.findIndex(elem => elem.orderId === orderId);
    const requestedOrder = orderQueue[orderIndex];
    orderQueue[orderIndex].status = 'complete';
    return requestedOrder;
}
// Notice that
// const requestedOrder = orderQueue[orderIndex];
// builds a reference to the array's member, not a copy of it.
// In result, requestOrder.status === 'complete' at the end of the function (returned value).
