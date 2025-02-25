import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"
import { useEffect, useState } from "react";
import { addProduct, Product } from "../store/product-slice";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = () => {
        return fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((p) => setProducts(p))
    }

    function handleClick(product: Product) {
        dispatch(addProduct({
            title: product.title,
            description: product.description,
            category: product.category,
            quantity: 1,
            price: product.price,
            image: product.image
        }))
    }

    return (
        <div className="gap-4 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
            {products.map((product) => (
                <div className="flex flex-col relative border border-gray-200 rounded shadow-md p-3 gap-2" key={product.id}>
                    <img src={product.image} className="h-48 w-48 p-2 self-center" />
                    <div className="flex justify-between border-t border-t-gray-200">
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">{product.title}</span>
                            <span className="text-xs">{product.description.length > 90 ? product.description.substring(0, 90) + "..." : product.description}</span>
                        </div>
                        <span className="text-sm">Rs. {product.price}</span>
                    </div>

                    <button className="bg-green-700 text-white font-bold rounded-md p-2 self-center mt-auto cursor-pointer" onClick={() => handleClick(product)}>Add to cart</button>
                </div>
            ))
            }
        </div>
    )
}