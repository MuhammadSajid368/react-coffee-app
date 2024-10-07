// src/types.ts
export interface Item {
    id: string;
    name: string;
    price: number;
    image : string ;
    taxRate: number;
    description : string ;
    isFree?: boolean;
    discountPirce? : number ;
    discountWith?: string;
  }
  
  export interface Order {
    id: string;
    items: Item[];
    total: number;
    createdAt: Date;
  }
  
  export interface Notification {
    orderId: string;
    message: string;
  }
  

  export interface Cart {
    id : string ;
    items: Item[]; 
    productName: string; productPrice: number; 
  }