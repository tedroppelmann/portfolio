import './Navbar.css'

function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-md fixed-top bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <div className="Name">
            Tomás Droppelmann
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar