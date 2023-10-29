import logo from '../images/R.png'


function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container-fluid justify-content-start ml-5">
        <img src={logo} alt="risto sushi" className="navbar-brand" style={{width:"50px", height:"60px"}} />
        <span className="navbar-brand mb-0 h1">Risto Sushi</span>
      </div>
    </nav>
  );
}

export default Navbar
