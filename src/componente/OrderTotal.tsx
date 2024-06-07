import { useMemo } from "react"
import { MenuItems } from "../type"
import { formatCurrency } from "../helpers";

type OrderTotalesProps ={
    order:MenuItems[];
}

export default function OrderTotal({order}:OrderTotalesProps) {

    //useMemo permite la ejecucion solo cuando hallan cambios 
    const subtotalAmount = useMemo(()=> order.reduce((total,item)=> total +(item.quantity*item.price),0),[order])


  return (
    <>
    <div className=" space-y-3">
      <h2 className=" font-black text-2xl"> Totales y propinas</h2>
      <p>subtotal a pagar:{" "}
        <span className="font-bold ">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p>Propina:{" "}
        <span className="font-bold ">$0</span>
      </p>
      <p>Total a pagar:{" "}
        <span className="font-bold ">$0</span>
      </p>
    </div>
    </>
  )
}


