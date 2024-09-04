import { useState } from "react"

export default function ShoppingListForm({addItem}){
    const [formdata,setFormdata] = useState({product : "", quantity: 0})
    const handleChange = (e) =>{
        e.preventDefault();
        setFormdata((currdata) =>{
            currdata[e.target.name] = e.target.value
            return{
                ...currdata
            }
        })
       
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        addItem(formdata)
    }
    return(
        
        <form onSubmit={handleSubmit}>
            <h4>Product is : {formdata.product} and Quantity is : {formdata.quantity}</h4>
            <label htmlFor="product">Enter Product:</label>
            <input type="text" id="product" name="product" value={formdata.product} onChange={handleChange}/>
            <label htmlFor="quantity">Enter Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={formdata.quantity} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}