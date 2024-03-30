import {OrderItem} from "../types"
import { formatCurrency } from "../helpers"

type OrderContentsProps ={
    order: OrderItem[ ]
    
}

const OrderContents = ({order}:OrderContentsProps) => {
  return (
    <div>
    <h2 className="poppins-semibold text-3xl">Consumo</h2>
    
    <div className="space-y-3 mt-10">
        {order.length === 0 ?
        <p className="poppins-regular text-center">No hay elementos de consumo</p>:
        (order.map(item=>(
            <div key={item.id} className="item-center flex justify-between border-t border-gray-200 py-5 last-of-type:border-b">
                <div className="flex flex-col">
                <p className="poppins-regular ">{item.name} - {formatCurrency(item.price)}</p>
                <p className="poppins-bold font-black text-sm">cantidad:{item.quantity} - {formatCurrency (item.price * item.quantity)}</p>
                </div>
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-bold">
                    x
                </button>
            </div>
        )
        ))}
    </div>
    </div>
  )
}

export default OrderContents