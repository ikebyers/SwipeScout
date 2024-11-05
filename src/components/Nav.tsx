// components/Nav.tsx
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/SavedCandidates">
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
