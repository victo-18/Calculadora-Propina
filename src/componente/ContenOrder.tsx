import { MenuItems } from "../type";
import { formatCurrency } from "../helpers";
type orderProps = {
  order: MenuItems[];
  removeItem: (id:MenuItems['id'])=>void;
};
const ContenOrder = ({ order,removeItem }: orderProps) => {
  return (
    <div>
      <h2 className=" font-black text-4xl">Consumo</h2>
      <div className=" space-y-3 mt-5">
        {
          order.map((iten) => (
            <div key={iten.id} 
            className=" items-center flex justify-between border-t
             border-teal-400 py-2 last-of-type:border-b pr-4 pl-4" >
              <div>
                <p className=" text-lg">
                  {iten.name} - Valor Unidad: {formatCurrency(iten.price)}
                </p>
                <p className=" font-black">
                  Cantidad: {iten.quantity} - Subtotal:{" "}
                  {formatCurrency(iten.quantity * iten.price)}
                </p>
              </div>
              <button  onClick={()=>{removeItem(iten.id)}} className=" bg-red-600 h-8 w-8 font-black text-white rounded-full hover:bg-red-900">
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContenOrder;
