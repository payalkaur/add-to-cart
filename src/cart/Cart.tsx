import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { Minus, Plus, Trash } from 'lucide-react'
import { increaseQuantity, removeProduct, decreaseQuantityThunk } from "../store/product-slice";

const Cart = () => {
    const { products } = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch<AppDispatch>();

    function decrease(id: string) {
        dispatch(decreaseQuantityThunk(id))
    }

    function increase(id: string) {
        dispatch(increaseQuantity({ id }))
    }

    function remove(id: string) {
        dispatch(removeProduct({ id }))
    }

    return (
        <div className='flex flex-col p-4 gap-2'>
            {
                products.length == 0 ?
                    <div className='text-4xl font-semibold self-center'>Cart is Empty!</div> :
                    products.map((product) => {
                        return <div className='flex gap-6 border border-gray-300 rounded-b-sm p-2' key={product.id}>
                            <img className='h-24 w-24 self-center' src={product.image} />

                            <div className='flex justify-between w-full'>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-medium'>{product.title}</span>
                                    <span>{product.category.toUpperCase()}</span>

                                    <div className='flex gap-2'>
                                        <Minus color='#C70039' className='border border-[#C70039] cursor-pointer' onClick={() => decrease(product.id)} />
                                        <span className='text-md'>{product.quantity}</span>
                                        <Plus color='blue' className='border border-blue-500 cursor-pointer' onClick={() => increase(product.id)} />
                                    </div>
                                    <span className='font-medium mt-6'>Rs. {product.total}</span>
                                </div>

                                <Trash color='#C70039' className='cursor-pointer' onClick={() => remove(product.id)} />
                            </div>

                        </div>
                    })
            }
        </div>
    )
}

export default Cart