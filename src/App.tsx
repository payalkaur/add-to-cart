import './App.css'
import Products from './products/Products'
import { Provider } from 'react-redux'
import store from './store/store.ts'

function App() {

  return (
    <Provider store={store}>
      <Products />
    </Provider>
  )
}

export default App
