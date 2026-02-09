import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
     <h3>Collections</h3>

     <div>
      <input type="text" placeholder="Search" />
     </div>

     <div>

      <Link to="#">Men</Link>
      <Link to="#">Women</Link>
      <Link to="#">Kid</Link>
      <Link to="#">All Collections</Link>
      <Link to="#">Sale</Link>

      </div>


      <div>
        <Link to='#'>Account</Link>
      </div>


      






      
    </div>
  );
};

export default Navbar;
