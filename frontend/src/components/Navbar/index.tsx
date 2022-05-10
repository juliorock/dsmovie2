import {ReactComponent as GithubIcon} from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
    return (

        <header>

      <nav className="container">
        <div className="dsmovie-nav-container">

          <h1>DSMovie</h1>
          <a href="https://github.com/juliorock">

            <div>

              <GithubIcon />

              <p>/devsuperior</p>
            </div>


          </a>
          
        </div>
      </nav>
    </header>
    );
}
  export default Navbar;