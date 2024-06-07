import { MenuIten } from "./componente/MenuIten"
import { menuItems } from "./date/db"
import useOrder from "./hooks/userOrder"
import ContenOrder from "./componente/ContenOrder"
import OrderTotal from "./componente/OrderTotal"

function App() {
 const{order,addIten,removeItem}=useOrder()
  return(
<>
<header className=" bg-teal-400 py-10">
<h1 className=" text-center text-4xl font-black"> Calculadora de propinas</h1>
</header>
<main className=" mx-auto py-20 grid md:grid-cols-2">
  <div className="p-5" >
  <h2 className=" text-4xl font-black" >Menú</h2>
  <div className=" space-y-3 mt-10">
  {menuItems.map(items=>(
    <MenuIten
    key={items.id}
    items ={items}
    addIten={addIten}
    
    />
  ))}
  </div>
  </div>
  <div className="border border-dashed rounded-lg border-slate-300 space-x-10">
 <ContenOrder
 order={order}
 removeItem ={removeItem}
 />
 <OrderTotal
 order={order}
 />
  </div>

</main>
</>
  )
}

export default App
