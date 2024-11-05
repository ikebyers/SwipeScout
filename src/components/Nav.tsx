// components/Nav.tsx
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav: React.FC = () => {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <h5>
        <NavLink className="nav-link" to="/" end>
        Home
        </NavLink>
      </h5>
      <h5>
        <NavLink className="nav-link" to="/SavedCandidates">
        Potential Candidates
        </NavLink>
      </h5>
      </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Nav;
