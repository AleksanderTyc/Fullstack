// let name = 'Bob'; // inferred type: string
// name = 5; // Type 'number' is not assignable to type 'string'.ts(2322)
let name: string = 'Bob'; // Explicit type delaration
let numberOfWheels: number = 4;
let isStudent: boolean = true;

// Custom type
type Pizza = {
    name: string,
    price: number
};

type Order = {
    pizza: Pizza,
    status?: string, // this is optional, i.e. an instance without status is also TS-correct
    orderId: number
};

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }

];

// This won't work - cash is modified later in the code
let cashInRegister = 100;

// Nested type - Array of elements typed Order
const orderQueue: Order[] = []; // Alternatively orderQueue : Array<Order>

// This won't work - nextOrderId is modified later in the code
let nextOrderId = 1;
// Changing both const's into let's makes the code usable, but this is not the point of the exercise.

function addNewPizza(newPizza: Pizza) {
    menu.push(newPizza);
}

function placeOrder(pizzaName: string) {
    const pizzaOrder = menu.filter(elem => elem.name === pizzaName)[0];
    if (pizzaOrder === undefined) {
        console.log(`* W * placeOrder * Pizza ${pizzaName} is absent from the menu.`);
        return;
    }
    // Their way: menu.find(elem => elem.name === pizzaName);
    cashInRegister += pizzaOrder.price;
    const newOrder = { pizza: pizzaOrder, status: "ordered", orderId: nextOrderId++ };
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number) {
    // My take - too convoluted
    /*
        const orderIndex = orderQueue.findIndex(elem => elem.orderId === orderId);
        if( orderIndex === undefined) {
            console.log( `* W * completeOrder * Order Id ${orderId} does not exist.`);
            return;
        } 
        const requestedOrder = orderQueue[orderIndex];
        orderQueue[orderIndex].status = 'complete';
        return requestedOrder;
    */
    // Here is an easier way - taking advantage of referential nature of Array
    const order = orderQueue.find(elem => elem.orderId === orderId);
    if (order === undefined) {
        console.log(`* W * completeOrder * Order Id ${orderId} does not exist.`);
        return;
    }
    order.status = 'complete';
    return order;
}
// Notice that
// const requestedOrder = orderQueue[orderIndex];
// builds a reference to the array's member, not a copy of it.
// In result, requestOrder.status === 'complete' at the end of the function (returned value).

// completeOrder('1'); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
completeOrder(1); // No grief

const o1 = placeOrder('Veggie');
console.log( o1 );
const o2 = placeOrder('Pepperoni');
console.log( o2 );
const o3 = placeOrder('DoDupy');
console.log( o3 );
const s2 = completeOrder(2);
console.log( s2 );
console.log(orderQueue);
