import { MenuIten } from "./componente/MenuIten";
import { menuItems } from "./date/db";
import useOrder from "./hooks/userOrder";
import ContenOrder from "./componente/ContenOrder";
import OrderTotal from "./componente/OrderTotal";
import TipPorcentaje from "./componente/TipPorcentaje";

function App() {
  const { order, tip, setTip, addIten, removeItem, placeOrder } = useOrder();
  return (
    <>
      <header className=" bg-teal-400 py-10">
        <h1 className=" text-center text-4xl font-black">
          {" "}
          Calculadora de propinas
        </h1>
      </header>
      <main className=" mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className=" text-4xl font-black">Menú</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map((items) => (
              <MenuIten key={items.id} items={items} addIten={addIten} />
            ))}
          </div>
        </div>
        {order.length ? (
          <>
            <div className="border border-dashed rounded-lg border-slate-300 space-x-10">
              <ContenOrder order={order} removeItem={removeItem} />
              <TipPorcentaje setTip={setTip} tip={tip} />
              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </div>
          </>
        ) : (
          <p className=" text-current font-black text-2xl">
            No hay orden por el momento
          </p>
        )}
      </main>
    </>
  );
}

export default App;
