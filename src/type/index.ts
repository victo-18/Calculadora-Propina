export type MenuItems = {
  quantity: number;
  "id": number;
  "name": string;
  "price": number;
};
export type OrderItem= MenuItems & {
 
  "quantity":number
}

export type PropinasProps={
  "id":string;
  "value": number;
  "label":string;
}