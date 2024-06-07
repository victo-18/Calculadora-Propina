export type MenuItems = {
  quantity: number;
  "id": number;
  "name": string;
  "price": number;
};
export type OrderItem= MenuItems & {
 
  "quantity":number
}