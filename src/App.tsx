import './App.css'
import Products from './products/Products'
import { ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router'

function App() {

  return (
    <div className="flex flex-col justify-center p-4 gap-6">
      <div className="flex justify-between p-2">
        <span className="text-4xl font-semibold">Shopping App</span>
        <NavLink to="cart">
          <ShoppingCart className="cursor-pointer" size={32} />
        </NavLink>
      </div>
      <Products />
    </div>
  )
}

export default App
