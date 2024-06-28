import { useEffect, useState } from "react";
import { loadCategories } from "../../stores/Categories";
import { useDispatch, useSelector } from "react-redux";
function Categories() {
    // const [categories, setCategories] = useState([]);
    const categories = useSelector((state) => state.categories.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategories());
    },[])
    if (categories.length === 0) {
        return <div>Loading...</div>
    }
    console.log(categories);
    return (<div>
        {categories.map((item)=> {
            return(
            <button key={item.id} onClick={() => {
                dispatch({type: "SET_CURRENT_CATEGORY", payload: item.id})
            }}>{item.name}</button>)
        })}
    </div>)
    // return (
    //     <div>
    //         {JSON.stringify(categories)}
    //     </div>
    // )
}

export default Categories;