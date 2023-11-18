import { useState, useEffect} from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filterProducts, setfilterProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData() {
        fetch("https://fakestoreapi.com/products")
        .then(responce => responce.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) =>{
                return (
                    <div className="prodStyle">
                        <p style={{fontSize:".8rem"}}>{product.title}</p>
                        <p>${product.price}</p>
                        <img src={product.image} alt={product.title} />
                    </div>
                )
            })
            setfilterProducts(currentFilter)
        })
    }

    function handleChange(event){
        setSearchString(event.target.value)
    }
    return(
        <>
        <p>The Search Bar!</p>
        <input type="text" value={searchString} onChange={handleChange} />
        <div style={{display:"flex", flexFlow:"row wrap"}} >{filterProducts}</div>
        </>
    )
}