import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-center space-x-12 dark:text-neutral-400 text-neutral-600">
      <Link to={{hash: "#about"}}>About</Link>
      <Link to={{hash: "#projects"}}>Projects</Link>
      <Link to={{hash: "#experience"}}>Experience</Link>
      <Link to={{hash: "#contact"}}>Contact</Link>
    </div>
  )
}

export default NavBar;
