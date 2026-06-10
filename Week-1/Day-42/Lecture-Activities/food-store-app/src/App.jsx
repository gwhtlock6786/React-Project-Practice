import './App.css'
import EmployeeList from './components/Employees/EmployeeList/EmployeeList'
import Header from './components/Header/Header'
import { employees } from './data/employee-data'

function App() {
 

  return (
    <>
      <Header />
      <EmployeeList employees={employees}/>
    </>
  )
}

export default App
