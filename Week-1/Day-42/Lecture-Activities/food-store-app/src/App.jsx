import './App.css'
import EmployeeList from './components/Employees/EmployeeList/EmployeeList'
import MenuItemList from './components/MenuItems/MenuItemList/MenuItemList'
import Header from './components/Header/Header'
import { employees } from './data/employee-data'
import {menuItems} from './data/menu-item-data'

function App() {
 

  return (
    <>
      <Header />
      <EmployeeList employees={employees}/>
      <MenuItemList menuItems={menuItems} />
    </>
  )
}

export default App
