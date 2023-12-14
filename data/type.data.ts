
export interface TProduct {
    id:number,
    name:string,
    price:number,
    catagory: string,
    img:any,
    isFav:boolean,
    quantity:number,
    unitPrice:number
}

export interface TOrderHistory{
    cart : TProduct[],
    subtotal:number;
    taxtAmount:number;
    total:number;
    deliveryCharge:number;
    deliveryDate:any;
    deliveryTime:string;
    totalItem:number;
}
