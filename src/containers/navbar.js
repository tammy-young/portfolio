import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NavHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      {
        isOpen ? (
          <div className="fixed w-screen h-screen flex flex-row">
            <NavMenu />
            <div className="bg-black bg-opacity-50 z-50 w-1/3" onClick={() => setIsOpen(false)}></div>
          </div>
        ) : (
          <button className="bg-white rounded-full p-3 shadow-lg m-6 fixed top-0 left-0 z-50" onClick={() => setIsOpen(true)}>
            <MenuIcon className="text-3xl dark:text-white text-neutral-400 cursor-pointer" />
          </button>
        )
      }
    </div >
  )
}

const NavMenu = (setIsOpen = null) => {
  return (
    <div className="flex flex-col justify-center dark:text-neutral-400 max-h-screen h-screen bg-white gap-12 absolute left-0 sticky top-0 px-8 md:w-full w-2/3 z-50">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-main">Tammy Young</h1>
        <p className="text-neutral-500">Software Developer</p>
      </div>
      <Link
        to={{ hash: "#about" }}
        onClick={() => { setIsOpen ?? setIsOpen(false) }}>
        <p>About</p>
      </Link>
      <Link
        to={{ hash: "#projects" }}
        onClick={() => { setIsOpen ?? setIsOpen(false) }}>
        <p>Projects</p>
      </Link>
      <Link
        to={{ hash: "#experience" }}
        onClick={() => { setIsOpen ?? setIsOpen(false) }}>
        <p>Experience</p>
      </Link>
      <Link
        to={{ hash: "#contact" }}
        onClick={() => { setIsOpen ?? setIsOpen(false) }}>
        <p>Contact</p>
      </Link>
    </div>
  )
}

const Navigation = () => {
  return (
    <>
      <div className="md:flex hidden md:w-1/5 md:min-w-[270px] md:max-w-[320px]">
        <NavMenu />
      </div>
      <div className="absolute md:hidden">
        <NavHamburger />
      </div>
    </>
  )
}

export default Navigation;
