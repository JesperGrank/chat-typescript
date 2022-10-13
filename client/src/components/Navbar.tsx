import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <ul className="nav_links">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}
