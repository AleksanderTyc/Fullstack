// let name = 'Bob'; // inferred type: string
// name = 5; // Type 'number' is not assignable to type 'string'.ts(2322)
let name: string = 'Bob'; // Explicit type delaration
let numberOfWheels: number = 4;
let isStudent: boolean = true;
// const numberOfWindows = 5; // Literal type
// const numberOfWindows :5 = 5; // Literal type - explicit type declaration
// let numberOfWindows : 5 = 5; // Literal type - effectively this is a const:
// numberOfWindows = 3; // Type '3' is not assignable to type '5'.ts(2322)
// Literal types are useful when we want to limit the domain of a variable,
// e.g. user role may be User, Admin or Guest, but not Hacker or adsblkadfkla. Use Union:
type UserRole = "User" | "Admin" | "Guest";
// This applies to Pizza example:
type OrderStatus = 'ordered' | 'complete';

// Custom type
type Pizza = {
    id: number,
    name: string,
    price: number
};

type Order = {
    pizza: Pizza,
    status?: OrderStatus, // this is optional, i.e. an instance without status is also TS-correct
    orderId: number
};

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 }

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
    const newOrder: Order = { pizza: pizzaOrder, status: "ordered", orderId: nextOrderId++ };
    // Explicitly defining newOrder as Order allows TS to recognise that status is of type OrderStatus.
    // Otherwise it would infer the status type to be string, and this would cause conflict in the line below.
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


// Here is example of type narrowing - we specify that identifier can only be a string or a number.
/*
// Here is my take - does not reveal certain TS features
function getPizzaDetail(identifier: string | number) {
    const typeOfIdentifier = typeof identifier;
    console.log(typeOfIdentifier, `string: ${typeOfIdentifier === 'string'}`, `number: ${typeOfIdentifier === 'number'}`);
    const pizzaDetail = menu.find(elem => typeOfIdentifier === 'string' ? elem.name === identifier : elem.id === identifier);
    return pizzaDetail;
}
*/
// Here is their take
function getPizzaDetail(identifier: string | number) {
    if( typeof identifier === 'string') {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if( typeof identifier === 'number') {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw new TypeError("Argument `identifier` must either be string or a number");
    }
}
// It is possible to import this function to another module, a JS module, where types are not verified.
// Throwing an error will improve developer's experience and code's usability.

// completeOrder('1'); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
completeOrder(1); // No grief

addNewPizza({ id: 5, name: "BBQ Chicken", price: 15 });

const o1 = placeOrder('Veggie');
console.log(o1);
const o2 = placeOrder('Pepperoni');
console.log(o2);
const o3 = placeOrder('DoDupy');
console.log(o3);
const s2 = completeOrder(2);
console.log(s2);
console.log(orderQueue);
const o4 = placeOrder('BBQ Chicken');
console.log(o4);
const s4 = completeOrder(3);
console.log(s4);

console.log(getPizzaDetail('a'));
console.log(getPizzaDetail(1));
console.log(getPizzaDetail('Veggie'));
