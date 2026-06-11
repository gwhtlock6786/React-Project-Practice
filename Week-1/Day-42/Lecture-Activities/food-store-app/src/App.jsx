import './App.css'
import EmployeeList from './components/Employees/EmployeeList/EmployeeList'
import MenuItemList from './components/MenuItems/MenuItemList/MenuItemList'
import ProductList from './components/Products/ProductList/ProductList'
import Header from './components/Header/Header'
import { employees } from './data/employee-data'
import { menuItems } from './data/menu-item-data'
import { productData } from './data/product-data'

function App() {
 

  return (
    <>
      <Header />
      <EmployeeList employees={employees}/>
      <MenuItemList menuItems={menuItems} />
      <ProductList products={productData} />
    </>
  )
}

export default App
