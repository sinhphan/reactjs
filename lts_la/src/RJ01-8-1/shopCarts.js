import {useState,useMemo,memo,useCallback} from 'react'
import './shopcarts.css'

/**
 * ! 1. create interface
 * ! 2. style for interface
 * ! 3. create function handle for add product and product price
 * ! 4. create function calculator toltal of product price
 * ! 5. create function handle for remove product
 */

export default function ShopCarts(){
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const handleAddProduct = (e)=>{
        e.preventDefault()
        const sumitedform = e.target
        const product = {
            name : sumitedform.nameprd.value,
            price : Number(sumitedform.priceprd.value)
        }

        setProducts([...products,product])

        sumitedform.reset()
        sumitedform.nameprd.focus()

        console.log('Product added')
    }

    const handleRemoveProduct = (e)=>{

        const id = e.target.dataset.productid

        const updatedProducts = products.filter((e,i)=>i !== Number(id))
        setProducts(updatedProducts)

        console.log('Product removed');
    }

    function calcTotalPrice(){
        console.log('Total price is calcaulating');

        let totalPrice = products.reduce((total,product)=>{
            return total = total + product.price
        },0)

        setTotalPrice(totalPrice)
    }

    
    useMemo(calcTotalPrice,[products])

    return (
        <div className="shopcarts-wrap">
             <FormAddProduct submitHandle={handleAddProduct}/>   

            <p><span>Product quantity : {products.length}</span></p>
            <p><span>Total Prices: {totalPrice}</span></p>

            <ul>
                {products.map((product,id)=>
                <li key={id}>
                    Product {product.name} - price: {product.price}
                    <button onClick={handleRemoveProduct} data-productid= {id}>Delete</button>
                </li>
                )}
                
            </ul>
      </div>)
}


function FormAddProduct({submitHandle}){
    console.log('Form add product re-rendered');
    return (
        <>
           <form action="#" id="add-form" onSubmit={submitHandle}>
            <input type="text" name="nameprd" id="nameprd" />
            <input type="number" name="priceprd" id="priceprd" />
            <button type="submit">Add</button>
            </form>
        </>
    )
}

