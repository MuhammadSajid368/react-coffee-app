import { Item } from "../types";

const sampleItems: Item[] = [
    {
         id: '1', 
         name: 'Espresso Coffee', 
         image: '/images.jfif', 
         price: 3.00, 
         taxRate: 0.1, 
         description: "A concentrated coffee brewed by forcing hot water through finely-ground coffee beans. It has a rich flavor and forms the base for many coffee drinks"
    },
    { 
        id: '2', 
        name: 'Americano Coffee', 
        image: "/download.jfif", 
        description: "Made by diluting a shot of espresso with hot water, resulting in a drink similar in strength to drip coffee but with a different flavor profile.", 
        price: 2.5, 
        taxRate: 0.1 ,
        discountWith : "1"
    },
    { 
        id: '3', 
        name: 'Latte Coffee', 
        image: "download1.jfif", 
        description: " A creamy coffee drink made with one shot of espresso and steamed milk, topped with a small amount of milk foam.", price: 3.5, 
        taxRate: 0.1 
    },
    { 
        id: '4', 
        name: 'Cappuccino Coffee', 
        image: "download2.jfif", 
        description: "Similar to a latte, but with equal parts espresso, steamed milk, and milk foam. It has a stronger coffee flavor.", price: 4.5, 
        taxRate: 0.1 
    },
    { 
        id: '5', 
        name: 'Macchiato Coffee', 
        image: "download3.jfif", 
        description: "An espresso 'stained' with a small amount of steamed milk or milk foam. It’s a stronger coffee drink with less milk.", 
        price: 4.5, 
        taxRate: 0.1 
    },
    { 
        id: '6', 
        name: 'Mocha Coffee', 
        image: "download4.jfif", 
        description: "A chocolate-flavored variant of a latte, combining espresso, steamed milk, and chocolate syrup, often topped with whipped cream.", 
        price: 5.5, 
        taxRate: 0.1 
    },
    { 
        id: '7', 
        name: 'Flat White Coffee', 
        image: "images6.jfif", 
        description: "A chocolate-flavored variant of a latte, combining espresso, steamed milk, and chocolate syrup, often topped with whipped cream.", 
        price: 5.5, 
        taxRate: 0.1 
    },
    { 
        id: '8', 
        name: 'Cold Brew Coffee', 
        image: "images7.jfif", 
        description: "A chocolate-flavored variant of a latte, combining espresso, steamed milk, and chocolate syrup, often topped with whipped cream.", 
        price:4.5, 
        taxRate: 0.1 
    },
];

export default sampleItems
