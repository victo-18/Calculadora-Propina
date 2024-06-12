import { useMemo } from "react"
import { MenuItems } from "../type"
import { formatCurrency } from "../helpers";


type OrderTotalesProps ={
    order:MenuItems[],
    tip: number;
    placeOrder: () => void
}

export default function OrderTotal({order,tip,placeOrder}:OrderTotalesProps) {

    //useMemo permite la ejecucion solo cuando hallan cambios 
    const subtotalAmount = useMemo(()=> order.reduce((total,item)=> total +(item.quantity*item.price),0),[order])
    //Calcula el porcentaje de la propina
    const amount = useMemo(() => subtotalAmount*tip,[subtotalAmount, tip]);
    //Funcion para el calculo del total de la orden
    const total = useMemo(()=> subtotalAmount+amount,[subtotalAmount, amount])
    // Valor boleano paraq desabilitar el boton
    const isDisabled = useMemo(() => total === 0, [total]);
    
  return (
    <>
    <div className=" space-y-3">
      <h2 className=" font-black text-2xl"> Totales y propinas</h2>
      <p>subtotal a pagar:{" "}
        <span className="font-bold ">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p>Propina:{" "}
        <span className="font-bold ">{formatCurrency(amount)}</span>
      </p>
      <p>Total a pagar:{" "}
        <span className="font-bold ">{formatCurrency(total)}</span>
      </p>
      <button className=" w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
        disabled={isDisabled}
        onClick={placeOrder}
      >Save order</button>
    </div>
    </>
  )
}


