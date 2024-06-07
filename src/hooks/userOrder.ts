import { useState } from "react";
import type { MenuItems, OrderItem } from "../type";
export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]); //agregando type a un hooks
  //Agregar una orden
  const addIten = (items: MenuItems) => {
    //evitando registros duplicados
    const itenExiste = order.find((ordeIten) => ordeIten.id === items.id);
    if (itenExiste) {
      const updateOrder = order.map((orderIten) =>
        orderIten.id === items.id
          ? { ...orderIten, quantity: orderIten.quantity + 1 }
          : orderIten
      );
      setOrder(updateOrder);
    } else {
      const newIten = { ...items, quantity: 1 }; //realizando una copia de items
      setOrder([...order, newIten]); //modificando el valor del hooks
    }
  };
  //Remover un elemento de la orden
  const removeItem = (id: MenuItems["id"]) => {
    setOrder(order.filter((item) => item.id !== id)); //Eliminando un elemento
  };
  return {
    order,
    addIten,
    removeItem,
  };
}
