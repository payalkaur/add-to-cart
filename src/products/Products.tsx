import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { useEffect } from "react";
import { fetchProducts } from "../store/product-slice";

export default function Products() {
    const products = useSelector((state: RootState) => state.products.products)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    function handleClick(){
        console.log("Clicked")
        nextFn()
    }

    function nextFn(){
        console.log("nextfn clicked")
    }

    return (
        <div className="flex flex-col justify-center p-4 gap-4">
            <span className="text-2xl font-bold">Products</span>
            <div className="gap-4 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">

                {products.map((product) => (
                    <div className="flex flex-col relative border border-gray-200 rounded shadow-md p-3 gap-2" key={product.id}>
                        <img src={product.image} className="h-48 w-48 p-2" />
                        <div className="flex justify-between border-t border-t-gray-200">
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm">{product.title}</span>
                                <span className="text-xs">{product.description.length > 90 ? product.description.substring(0, 90) + "..." : product.description}</span>
                            </div>
                            <span className="text-sm">Rs. {product.price}</span>
                        </div>

                        <button className="bg-green-700 text-white font-bold rounded-md p-2 self-center mt-auto cursor-pointer" onClick={handleClick}>Add to cart</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}