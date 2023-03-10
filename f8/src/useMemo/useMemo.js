import {useState, useMemo, useRef} from 'react';

/**
 * @useMemo
 */

export default function ProductsCart(){
    const [productName,setProductName] = useState('')
    const [productPrice,setProductPrice] = useState('')
    const [products,setProducts] = useState([])



    const handleAddProduct = ()=>{
        let lastProductId = products.length>0 ? products[products.length - 1].id : 1;
        setProducts([...products, 
            {   
                id: lastProductId +1,
                name: productName,
                price: Number(productPrice)
            }])
        setProductName('')
        setProductPrice(0)
        // console.log(focusRef)
        focusRef.current.focus()
    }

    const focusRef = useRef()

    let totalPrice = useMemo(()=>{
        // console.log('đang tính tổng')

        return products.reduce((total, product)=>{
            return total + product.price
        },0)
    },[products])

    

    return (
        <div style={{padding: 30}}>
            <input 
                type="text" 
                placeholder="Enter name of product"
                onChange={(e)=>setProductName(e.target.value)}
                value ={productName}
                ref={focusRef}
            />
            <br/>
            <input 
                type="number" 
                placeholder="Enter price of product"
                value={productPrice}
                onChange={(e)=>setProductPrice(e.target.value)}
            />
            <br/>
            <button onClick={handleAddProduct}>addProduct</button>
            <div>Total : {totalPrice}</div>
            <ul>
                {products.map(product =>{
                    return <li key={product.id}>{product.name} : {product.price}</li>
                })}
            </ul>
        </div>
    )
}