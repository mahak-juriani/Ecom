import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/effect";
import { useRef, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
function Products() {
    // const products = [
    //       {
    //         id: 1,
    //         title: "Apple iPhone 14",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 2,
    //         title: "Apple iPhone 13",
    //         price: "Rs. 70,000"
    //       },
    //       {
    //         id: 3,
    //         title: "Google Pixel 7",
    //         price: "Rs. 50,000"
    //       },
    //       {
    //         id: 4,
    //         title: "Nokia 1100",
    //         price: "Rs. 2,000"
    //       },
    //       {
    //         id: 5,
    //         title: "Samsung Galaxy S10",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 6,
    //         title: "Sony Xperia S10",
    //         price: "Rs. 1,00,000"
    //       }
    //     ];

    let [products, setProducts] = useState([]);
    console.log()
    fetch("https://682fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
      (response)=>{
        return response.json();
      }
    ).then((res)=>{
      console.log(res);
      setProducts(res);
    })

    return (
        <div>
          <div><Effect/></div>
            {
                products.map(function (item) {
                    return (<ProductCard key={item.id} title={item.title} price={item.price} />)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;
// Javascript XML 

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports




// On any change made, everything will change, thats why we dont give the index in the key.

let [innerwidth, innerheight] = useRef();
