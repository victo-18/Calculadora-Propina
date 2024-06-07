import { MenuItems } from "../type";

type ItemsPros = {
  items: MenuItems;
  addIten: (items:MenuItems) => void;
};
export const MenuIten = ({ items, addIten }: ItemsPros) => {
  return (
    <button
      className=" border-2 border-teal-400 w-full p-3 
    flex justify-between hover:bg-teal-200 rounded-md"
      onClick={() => addIten(items)}
    >
      <p>{items.name}</p>
      <p className=" font-black">US: {items.price}</p>
    </button>
  );
};
