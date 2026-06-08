
import './Header.css'

function Header() {
  let name = "Gershon Whitlock";


  return (
    <header className="header">
      <div className="left">
        <h1>Employee Tracker</h1>
        <p>Welcome, {name}!</p>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Employees</a>
        <a href="#">Departments</a>
        <a href="#">Settings</a>
      </nav>
    </header>
  );
}


export default Header;