import { useSelector } from "react-redux";

function Cart() {
    let cart = useSelector((state) => {
        return state.cart.items;
    })
    let categories = useSelector((state) => {
        return state.categories.categories;
    })
    return (
        <div>
            <ul>
            {
                Object.values(cart).map((item) => {
                    return (<li key={item.id}>{item.title}, {categories[item.category-1].name}</li>)
                })
                }
            </ul>
        </div>
    )
}

export default Cart;