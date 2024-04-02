import type {MenuItem} from "../types"

type MenuItemProps = {
    item: MenuItem, 
    addItem: (item:MenuItem )=>void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
      className="border-2 border-black hover:bg-slate-400  w-full p-3 flex justify-between "
      onClick={( ) => addItem(item ) }
    >
    <p className="poppins-regular ">{item.name}</p>
    <p className="poppins-bold font-black">${item.price}</p>
    </button>
  )
} 

