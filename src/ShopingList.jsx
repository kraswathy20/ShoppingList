import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList(){
    const [items,setItems] = useState([{product: "apple", quantity : 3, id : 1},
{product:"Eggs", quantity: 7,id:2}])
const addItem = (item) =>{
    setItems((currdata) =>{
        return[
            ...currdata,{...item,id:3}
        ]
    })
}
    return(
        <div>
            <ul>
                {items.map((i)=>(
                    <li key={i.id}>{i.product} - {i.quantity}</li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}