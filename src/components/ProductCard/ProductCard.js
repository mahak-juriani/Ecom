import './ProductCard.css';
import { useRef, useState } from 'react';
import logo1 from '../../assests/logo1.png';
function ProductCard({ title, price }) {
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');
  function printTitle() {
    console.log("printTitle");
    console.log(pRef.current.innerText);
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }

  function displayOutput(e){
    // console.log(iRef.cuurent);
    // console.log(oRef.current);
    // oRef.current.innerText = `Over here the output would arrive: ${iRef.current.value}`;
    setInputV(e.target.value);
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}> {title}</p>
      <p ref={pRef}> {price}</p>
      <img src={logo1} />
      <input type='text' onChange={displayOutput} ref={iRef} value={3}/>
      <p ref = {oRef}>Over here the output would arrive: {inputV}</p>
    </div>
  )

}
  
export default ProductCard;
  

//ProductCard()

// useState
// useRef
// useEffect

// custom hooks 
// default hooks
// they should not render a ui 
// they should be on the top of a function 
// they should be not in any conditon or loops 

//state variable =
// whenever 
// mounting is the first time a function is called, rendering or rerendering is the second or third or fourth time the function is called

//useState(default value)
// returns stateVar