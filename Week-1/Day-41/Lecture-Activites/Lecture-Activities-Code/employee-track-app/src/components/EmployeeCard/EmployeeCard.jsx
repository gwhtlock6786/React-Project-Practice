import './EmployeeCard.css';

function EmployeeCard() {

      let employee = {
      name: "John Doe",
      position: "Software Engineer",
      department: "Development",
      email: "example@place.com",
      isIT: true
    }
  return (

  

    <div className="employee-card">
      <h2>{employee.name} {employee.isIT && <span id="it-badge">IT</span>}</h2>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Email:</strong> {employee.email}</p>
    </div>

  );
}


export default EmployeeCard;