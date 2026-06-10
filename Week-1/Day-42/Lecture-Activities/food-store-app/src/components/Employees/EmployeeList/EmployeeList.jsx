import EmployeeCard from "../EmployeeCard/EmployeeCard"

const EmployeeList = ({employees}) => {

    if(!employees.length){
        return <p>No Employees found.</p>
    }

  return (
    <section className="employee-list">
        <h2>Employees</h2>
        <hr />
        {employees.map((employee) => (
            <EmployeeCard 
                key={employee.id}
                employee= {employee}   
            />
        ))}

    </section>
  )
}

export default EmployeeList